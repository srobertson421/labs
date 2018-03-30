import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Unauthorized from '../../views/Unauthorized';

const AuthRoute = (props) => {
  const { currentUser, component: Component, ...rest } = props;

  return <Route {...rest} render={(props) => {
    if(currentUser) {
      return <Component {...rest} currentUser={currentUser} />
    } else {
      return <Unauthorized />
    }
  }} />
}

export default AuthRoute;
