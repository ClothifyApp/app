import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthComponent = ({ component: Component, path, exact, authorized }) => {
  if (authorized) {
    return <Route component={Component} path={path} exact={exact} />;
  }

  return <Redirect to='/' />;
};

const NoAuthComponent = ({ component: Component, path, exact, authorized }) => {
  if (authorized) {
    return <Redirect to='/dashboard' />;
  }

  return <Route component={Component} path={path} exact={exact} />;
};

function mapStateToProps({ token }) {
  return {
    authorized: !!token,
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
