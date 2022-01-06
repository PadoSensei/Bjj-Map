import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//import css from './profile.module.css';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
    <div>
      {user.given_name}
      {user.email}
    </div>
    )
  )
}

export default Profile
