import React from 'react';
import { GroupedProduct } from 'features/products/models';

const ProductItem = ({ product, children }: GroupedProduct): JSX.Element => {
  return (
    <li key={product.id}>
      <div>{product.name}</div>
      {children && <ul>{children.map(ProductItem)}</ul>}
    </li>
  );
};

export default ProductItem;
