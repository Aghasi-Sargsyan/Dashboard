import React from 'react';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { LoginForm } from 'features/authentication/components';
import { SEO } from 'features/routing/constants';
import { useLoginMutation } from 'features/authentication/services';

const Login = () => {
  const { title, description } = SEO.login;
  const [loginUser] = useLoginMutation();

  return (
    <MainLayout title={title} description={description}>
      <div data-component="Login">
        <LoginForm onSubmit={loginUser} />
      </div>
    </MainLayout>
  );
};

export default Login;
