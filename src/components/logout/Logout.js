import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

export const Logout = () => {
  const history = useHistory();
  const handleLogout = () => {
    if (localStorage.getItem('token')) {
      localStorage.clear();
      return history.push('/login' )
    }
  }
  return (
    <FiLogOut style={{fontSize: '1.4em',  cursor: 'pointer'}} onClick={() => handleLogout()} />
  
    )
};