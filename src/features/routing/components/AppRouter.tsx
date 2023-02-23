import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from 'features/routing/components/ProtectedRoute';
import APP_ROUTES from 'features/routing/constants/routes';
import NoPage from 'pages/NoPage/NoPage';
import LoadingFallback from 'components/utils/LoadingFallback/LoadingFallback';

const Dashboard = lazy(() => import('pages/Dashboard'));
const Login = lazy(() => import('pages/Login'));
const Users = lazy(() => import('pages/Users'));
const Products = lazy(() => import('pages/Products'));

const AppRouter = () => {
  const isLoggedIn = true;

  const protectedElement = <ProtectedRoute isLoggedIn={isLoggedIn} to={APP_ROUTES.home.href} />;

  const dashboardElement = (
    <Suspense fallback={<LoadingFallback />}>
      <Dashboard />
    </Suspense>
  );

  const loginElement = (
    <Suspense fallback={<LoadingFallback />}>
      <Login />
    </Suspense>
  );

  return (
    <Routes>
      <Route path={APP_ROUTES.home.href} element={isLoggedIn ? dashboardElement : loginElement} />
      <Route element={protectedElement}>
        <Route
          path={APP_ROUTES.users.href}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Users />
            </Suspense>
          }
        />
        <Route
          path={APP_ROUTES.products.href}
          element={
            <Suspense fallback={<LoadingFallback />}>
              <Products />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <Suspense fallback={<LoadingFallback />}>
            <NoPage />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRouter;
