import React from 'react';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { SEO } from 'features/routing/constants/seo';

const Dashboard = () => {
  const { title, description } = SEO.dashboard;

  return (
    <MainLayout title={title} description={description}>
      <div data-component="Dashboard">
        <h1>Dashboard</h1>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
