/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthComponent = ({
  component: Component,
  path,
  exact,
  logged,
  authorized,
}) => {
  if (logged && authorized) {
    return <Route component={Component} path={path} exact={exact} />;
  }

  return <Redirect to="/" />;
};

AuthComponent.propTypes = {
  component: PropTypes.object,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorized: PropTypes.bool,
  logged: PropTypes.bool,
};

AuthComponent.defaultProps = {
  component: null,
  logged: false,
  authorized: false,
};

const NoAuthComponent = ({
  component: Component,
  path,
  exact,
  authorized,
  logged,
}) => {
  if (logged && authorized) {
    return <Redirect to="/swipe" />;
  }

  return <Route component={Component} path={path} exact={exact} />;
};

NoAuthComponent.propTypes = {
  component: PropTypes.object,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorized: PropTypes.bool,
  logged: PropTypes.bool,
};

NoAuthComponent.defaultProps = {
  component: null,
  authorized: false,
  logged: false,
};

function mapStateToProps({ user, token }) {
  return {
    logged: !!token,
    authorized: user && Boolean(user.fullName),
  };
}

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/
export const AuthenticatedRoute = connect(mapStateToProps)(AuthComponent);

/*
  AuthenticatedRoute
  should be used for routes which not require authentication
*/
export const UnauthenticatedRoute = connect(mapStateToProps)(NoAuthComponent);
