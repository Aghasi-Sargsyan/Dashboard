import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Users from 'pages/Users';
import Products from 'pages/Products';
import ProtectedRoute from 'features/routing/components/ProtectedRoute';
import APP_ROUTES from 'features/routing/constants/routes';
import { Navigate } from 'react-router';

const AppRouter = () => {
  const isLoggedIn = false;

  return (
    <Routes>
      <Route path={APP_ROUTES.home.href} element={isLoggedIn ? <Dashboard /> : <Login />} />
      <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} to={APP_ROUTES.home.href} />}>
        <Route path={APP_ROUTES.users.href} element={<Users />} />
        <Route path={APP_ROUTES.products.href} element={<Products />} />
        <Route path="*" element={<Navigate to={APP_ROUTES.home.href} replace />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
