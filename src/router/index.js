// eslint-disable react/jsx-filename-extension
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AuthenticatedRoute, UnauthenticatedRoute } from './AuthRoutes';
import NotFound from '../pages/NotFound';
import ROUTES from './routes';

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
const Router = () => (
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

export default Router;
