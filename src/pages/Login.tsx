import React from 'react';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { SEO } from 'features/routing/constants/seo';
import { LoginForm } from 'features/authentication';
import { useLoginMutation } from 'features/authentication/services/authApi';

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
