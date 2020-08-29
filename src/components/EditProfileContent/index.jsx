import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as globalActions from '../../actions/globalActions';
import * as authActions from '../../actions/authActions';

import ProfileCompletion from '../modals/ProfileCompletion';
import { Button } from '../base/Buttons';
import Tags from '../modals/Tags';
import { getTags, updateUser } from '../../api';
import { Wrapper, Actions } from './styles';

const EditProfileContent = ({
  setLoading, setUser, user, setTags, tags, onClose
}) => {
  useEffect(() => {
    const getAllTags = async () => {
      setLoading(true);
      const tagsResponse = await getTags();
      await setTags(tagsResponse);
      setLoading(false);
    };
    if (!tags || !tags.length) {
      getAllTags();
    }
  }, []);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await updateUser(user);
      onClose();
    } catch (error) {
      console.log('handleSubmit -> error', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <ProfileCompletion userData={user} updateUser={setUser} />
      <Tags
        hideTitle
        userData={user}
        updateUser={setUser}
        tags={tags}
        onEnds={handleSubmit}
      />

      <Actions>
        <Button color="secondary">Cerrar sesión</Button>
        <Button>Eliminar Cuenta</Button>
      </Actions>
    </Wrapper>
  );
};

EditProfileContent.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
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
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContent);
