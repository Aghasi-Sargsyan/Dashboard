import React from 'react';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { SEO } from 'features/routing/constants/seo';

const Login = () => {
  const { title, description } = SEO.login;

  return (
    <MainLayout title={title} description={description}>
      <div data-component="Login">
        <h1>Login</h1>
      </div>
    </MainLayout>
  );
};

export default Login;
