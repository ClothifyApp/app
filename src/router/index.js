// eslint-disable react/jsx-filename-extension
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AuthenticatedRoute, UnauthenticatedRoute } from './AuthRoutes';
import NotFound from '../pages/NotFound';
import ROUTES from './routes';
import * as authActions from '../actions/authActions';

const routes = ROUTES.map((route) => {
  if (route.path instanceof Array) {
    return route.path.map((path) => ({
      ...route,
      path,
    }));
  }
  return route;
}).flat();

// eslint-disable-next-line import/prefer-default-export
const Router = ({ setUser, setToken }) => {
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    const loggedToken = localStorage.getItem('token');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }

    if (loggedToken) {
      const foundToken = loggedToken;
      setToken(foundToken);
    }
  }, []);

  return (
    <Switch>
      {routes.map(({
        auth, exact, key, path, redirect, component,
      }) => {
        const AuthRoute = auth ? AuthenticatedRoute : UnauthenticatedRoute;
        return (
          <AuthRoute
            key={key}
            exact={exact}
            component={component}
            path={path}
            redirect={redirect}
          />
        );
      })}
      <Route component={NotFound} />
    </Switch>
  );
};

Router.propTypes = {
  setUser: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setUser: authActions.setUser,
    setToken: authActions.setToken,
  },
  dispatch,
);

export default connect(null, mapDispatchToProps)(Router);
