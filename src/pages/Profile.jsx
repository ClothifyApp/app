import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// REDUX
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as globalActions from '../actions/globalActions';
import * as authActions from '../actions/authActions';

import ProfileCompletion from '../components/modals/ProfileCompletion';
import BaseModal from '../components/modals/Base';
import Tags from '../components/modals/Tags';
import { getTags, updateUser } from '../api';
import { notificationTypes } from '../components/Notification/constants';

const Profile = ({
  setLoading, setUser, setTags, tags, token, setNotification,
}) => {
  useEffect(() => {
    const getAllTags = async () => {
      try {
        setLoading(true);
        const tagsResponse = await getTags();
        await setTags(tagsResponse);
        setLoading(false);
      } catch (error) {
        setNotification(
          notificationTypes.error,
          'No pudimos traer las tags',
          'Por favor inténtalo de nuevo.',
        );
      }
    };
    getAllTags();
  }, []);

  const [step, setStep] = useState(1);
  const [internalUser, setInternalUser] = useState({ country: 'Colombia' });

  const handleContinue = (userFirstStep) => {
    setInternalUser(userFirstStep);
    setStep(step + 1);
  };

  if (!token) return <Redirect to="/" />;

  const handleSubmit = async (userPreferences) => {
    try {
      setLoading(true);
      internalUser.preferences = userPreferences;
      await updateUser(internalUser);
      setUser(internalUser);
    } catch (error) {
      setNotification(
        notificationTypes.error,
        'No pudimos crear el usuario :(',
        'Por favor inténtalo de nuevo.',
      );
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    if (step === 1) {
      return (
        <ProfileCompletion
          userData={internalUser}
          onContinue={handleContinue}
          updateUser={setUser}
        />
      );
    }

    if (step === 2) {
      return (
        <Tags
          userData={internalUser}
          updateUser={setUser}
          tags={tags}
          onEnds={handleSubmit}
        />
      );
    }
    return null;
  };

  return <BaseModal isOpen>{renderStep()}</BaseModal>;
};

Profile.propTypes = {
  setLoading: PropTypes.func.isRequired,
  setTags: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
  setNotification: PropTypes.func.isRequired,
  tags: PropTypes.array,
  token: PropTypes.string,
};

Profile.defaultProps = {
  token: null,
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
    setNotification: globalActions.setNotification,
    setTags: globalActions.setTags,
    setUser: authActions.setUser,
    setToken: authActions.setToken,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
