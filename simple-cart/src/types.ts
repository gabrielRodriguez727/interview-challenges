export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export enum CartOp {
  ADD = 'add',
  REMOVE = 'remove',
}