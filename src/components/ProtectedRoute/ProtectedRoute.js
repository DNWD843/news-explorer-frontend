import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MAIN } from '../../utils/routesMap';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>{() => (props.isLoggedIn ? <Component {...props} /> : <Redirect to={MAIN} />)}</Route>
  );
};

export default ProtectedRoute;
