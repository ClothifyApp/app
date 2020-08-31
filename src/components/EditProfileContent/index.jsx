import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as globalActions from '../../actions/globalActions';
import * as authActions from '../../actions/authActions';

import ProfileCompletion from '../modals/ProfileCompletion';
import { Button } from '../base/Buttons';
import Tags from '../modals/Tags';
import { updateUser } from '../../api';
import { Wrapper, Actions, DeleteAccount } from './styles';

const EditProfileContent = ({
  setLoading,
  setUser,
  user,
  setTags,
  tags,
  onClose,
  logout,
}) => {
  useEffect(() => {
    setTags();
  }, [setTags]);

  const handleSubmit = async (userPreferences) => {
    try {
      const newUser = { ...user, preferences: userPreferences };
      setLoading(true);
      await updateUser(newUser);
      setUser(newUser);
      return onClose();
    } catch (error) {
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    onClose();
    logout();
    return <Redirect to="/" />;
  };

  return (
    <Wrapper>
      <ProfileCompletion userData={user} updateUser={setUser} />
      <Tags hideTitle userData={user} tags={tags} onEnds={handleSubmit} />

      <Actions>
        <Button color="greyLighter" margin="10px 0 20px" onClick={handleLogout}>
          Cerrar sesión
        </Button>
        <DeleteAccount>Eliminar Cuenta</DeleteAccount>
      </Actions>
    </Wrapper>
  );
};

EditProfileContent.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  tags: PropTypes.array,
};

EditProfileContent.defaultProps = {
  tags: [],
};

const mapStateToProps = ({
  isLoading, user, token, tags,
}) => ({
  isLoading,
  user,
  token,
  tags,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setLoading: globalActions.setLoading,
    setTags: globalActions.setTags,
    setUser: authActions.setUser,
    setToken: authActions.setToken,
    logout: authActions.logout,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContent);
