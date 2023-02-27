import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NoPage from 'pages/NoPage/NoPage';
import LoadingFallback from 'components/utils/LoadingFallback/LoadingFallback';
import { Navigate } from 'react-router';
import { useAppSelector } from '@/store/hooks';
import { selectIsAuthenticated } from 'features/authentication/services';
import { APP_ROUTES } from 'features/routing/constants';
import { ProtectedRoute } from 'features/routing/components';

const Login = lazy(() => import('pages/Login'));
const Users = lazy(() => import('pages/Users'));
const Products = lazy(() => import('pages/Products'));

const AppRouter = () => {
  const isLoggedIn = useAppSelector(selectIsAuthenticated);
  const protectedElement = <ProtectedRoute isLoggedIn={isLoggedIn} to={APP_ROUTES.home.href} />;

  const rootElement = isLoggedIn ? (
    <Navigate to={APP_ROUTES.products.href} replace />
  ) : (
    <Suspense fallback={<LoadingFallback />}>
      <Login />
    </Suspense>
  );

  return (
    <Routes>
      <Route path={APP_ROUTES.home.href} element={rootElement} />
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
