import React, { useState, useMemo, useDeferredValue } from 'react';
import { filterGroupedProducts, groupProducts } from 'features/products/utils';
import { Product } from 'features/products/models';
import { ProductItem } from 'features/products/components';
import { Input } from 'components/ui';
import cn from './cn.module.css';

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  const [searchInput, setSearchInput] = useState<string>('');
  const deferredInput = useDeferredValue(searchInput);

  const groupedProducts = useMemo(() => groupProducts(products), [products]);

  const filteredGroupedProducts = useMemo(
    () => filterGroupedProducts(groupedProducts, deferredInput),
    [groupedProducts, deferredInput],
  );

  return (
    <div className={cn.productList} data-component="ProductList">
      <Input
        type="text"
        placeholder="Search for a product"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
      />
      <ul>{filteredGroupedProducts.map(ProductItem)}</ul>
    </div>
  );
};

export default ProductList;
