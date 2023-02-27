import { GroupedProduct, Product } from 'features/products/models';

export const groupProducts = (
  products: Product[],
  parentId: number | null = null,
): GroupedProduct[] => {
  return products
    .filter((product) => String(product.parentId) === String(parentId))
    .map((product) => ({
      product,
      children: groupProducts(products, product.id),
    }));
};

export const filterGroupedProducts = (
  groupedProducts: GroupedProduct[],
  searchInput: string,
): GroupedProduct[] => {
  return groupedProducts.filter((groupedProduct) => {
    const { product, children } = groupedProduct;
    const matches =
      product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.description.toLowerCase().includes(searchInput.toLowerCase());

    if (matches) {
      return true;
    }

    if (children) {
      const filteredChildren = filterGroupedProducts(children, searchInput);
      if (filteredChildren.length > 0) {
        groupedProduct.children = filteredChildren;
        return true;
      }
    }

    return false;
  });
};
