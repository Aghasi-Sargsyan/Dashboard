import React, { useEffect, useState } from 'react';
import MainLayout from 'layouts/MainLayout/MainLayout';
import { SEO } from 'features/routing/constants';
import { Product } from 'features/products/models';
import { ProductList } from 'features/products/components';
import { BASE_API_URL } from '@/constants/secrets';
import { API_ENDPOINTS } from '@/constants/api';

const Products = () => {
  const { title, description } = SEO.products;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    //due to time constraints, I'm not using the redux toolkit query api or a custom hook
    //also i should be adding loading and error states
    fetch(`${BASE_API_URL}/${API_ENDPOINTS.products.list}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <MainLayout title={title} description={description}>
      <ProductList products={products} />
    </MainLayout>
  );
};

export default Products;
