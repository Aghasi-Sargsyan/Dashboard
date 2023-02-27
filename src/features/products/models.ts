export interface Product {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  parentId: number | null;
}

export interface GroupedProduct {
  product: Product;
  children?: GroupedProduct[];
}
