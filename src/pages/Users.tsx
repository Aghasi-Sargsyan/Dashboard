import React from 'react';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { SEO } from 'features/routing/constants/seo';

const Users = () => {
  const { title, description } = SEO.users;

  return (
    <MainLayout title={title} description={description}>
      <div data-component="Users"></div>
    </MainLayout>
  );
};

export default Users;
