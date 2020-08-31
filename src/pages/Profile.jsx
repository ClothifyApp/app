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
import { updateUser } from '../api';

const Profile = ({
  setLoading, setUser, setTags, tags, token,
}) => {
  useEffect(() => {
    setTags();
  }, [setTags]);

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
      console.log('handleSubmit -> error', error);
      return null;
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
    setTags: globalActions.setTags,
    setUser: authActions.setUser,
    setToken: authActions.setToken,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
