import React from 'react';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { SEO } from 'features/routing/constants/seo';

const Products = () => {
  const { title, description } = SEO.products;

  return (
    <MainLayout title={title} description={description}>
      <div data-component="Products">
        <h1>Products</h1>
      </div>
    </MainLayout>
  );
};

export default Products;
