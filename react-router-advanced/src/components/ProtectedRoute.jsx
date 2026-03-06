import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';  // Import the useAuth hook

function ProtectedRoute() {
  const { isAuthenticated } = useAuth();  // Use the useAuth hook instead of useContext directly
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;