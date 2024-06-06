import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    console.log('No current user, redirecting to login'); // Debug statement
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
