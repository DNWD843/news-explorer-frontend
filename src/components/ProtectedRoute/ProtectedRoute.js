import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { MAIN } from '../../utils/routesMap';

/**
 * @module ProtectedRoute
 * @description HOC-компонент<br>
 * Защищает роут saved-news.
 * @param {Object} props - пропсы - защищаемый компонент и его пропсы
 * @returns {JSX}
 * @since v.1.1.0
 */
const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>{() => (props.isLoggedIn ? <Component {...props} /> : <Redirect to={MAIN} />)}</Route>
  );
};

export default ProtectedRoute;
