import { Navigate, Outlet } from 'react-router';
import React from 'react';

type Props = {
  isLoggedIn: boolean;
  to: string;
};

const ProtectedRoute = ({ isLoggedIn, to }: Props) => {
  if (!isLoggedIn) {
    return <Navigate to={to} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
