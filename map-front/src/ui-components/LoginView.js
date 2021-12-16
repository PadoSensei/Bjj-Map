import React from 'react';
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';

const LoginView = ({ isAuthenticated }) => {

  if (isAuthenticated){
    return (
      <LogOutButton />
    )
  } else {
    return (
      <LogInButton />
    )
  }
}

export default LoginView
