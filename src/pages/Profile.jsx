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

const Profile = ({
  setLoading, setUser, user, setTags, tags,
}) => {
  useEffect(() => {
    const getAllTags = async () => {
      setLoading(true);
      const tagsResponse = await getTags();
      await setTags(tagsResponse);
      setLoading(false);
    };
    getAllTags();
  }, []);

  const [step, setStep] = useState(1);
  const handleContinue = () => setStep(step + 1);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await updateUser(user);
      return <Redirect to="/posts" />;
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
          userData={user}
          onContinue={handleContinue}
          updateUser={setUser}
        />
      );
    }

    if (step === 2) {
      return (
        <Tags
          userData={user}
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
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
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
