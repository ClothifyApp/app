import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as globalActions from '../../actions/globalActions';
import * as authActions from '../../actions/authActions';
import * as swipeActions from '../../actions/swipeActions';
import { notificationTypes } from '../Notification/constants';

import ProfileCompletion from '../modals/ProfileCompletion';
import ConfirmDeletion from './components/ConfirmDeletion';
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
  setNotification,
  deleteUser,
  getGarments,
}) => {
  useEffect(() => {
    const getAllTags = async () => {
      try {
        await setTags();
      } catch (error) {
        setNotification(
          notificationTypes.error,
          'No pudimos traer las tags',
          'Por favor inténtalo de nuevo.',
        );
      } finally {
        setLoading(false);
      }
    };
    if (!tags || !tags.length) {
      getAllTags();
    }
  }, []);

  const [isConfirmDeletionOpen, setIsConfirmDeletionOpen] = useState(false);

  const handleCloseConfirmDeletion = () => setIsConfirmDeletionOpen(false);
  const handleOpenConfirmDeletion = () => setIsConfirmDeletionOpen(true);

  const areDiferentPreferences = (lastPreferences, newPreferences) => {
    console.log(lastPreferences, newPreferences);
    if (lastPreferences.length !== newPreferences.length) return true;
    // eslint-disable-next-line no-restricted-syntax
    for (const pref of lastPreferences) {
      if (!newPreferences.some((p) => p === pref)) return true;
    }

    return false;
  };

  const handleSubmit = async (userPreferences) => {
    try {
      const newUser = { ...user, preferences: userPreferences };
      setLoading(true);
      await updateUser(newUser);
      if (areDiferentPreferences(user.preferences, userPreferences)) {
        getGarments();
      }
      setUser(newUser);
      onClose();
    } catch (error) {
      setNotification(
        notificationTypes.error,
        'No pudimos guardar tu usuario :(',
        'Por favor inténtalo de nuevo.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = () => {
    onClose();
    deleteUser();
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
        <DeleteAccount onClick={handleOpenConfirmDeletion}>Eliminar Cuenta</DeleteAccount>
      </Actions>
      <ConfirmDeletion
        isOpen={isConfirmDeletionOpen}
        onClose={handleCloseConfirmDeletion}
        onDelete={handleDelete}
      />
    </Wrapper>
  );
};

EditProfileContent.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  getGarments: PropTypes.func.isRequired,
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
    setNotification: globalActions.setNotification,
    setUser: authActions.setUser,
    setToken: authActions.setToken,
    logout: authActions.logout,
    deleteUser: authActions.deleteUser,
    getGarments: swipeActions.getGarments,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContent);
