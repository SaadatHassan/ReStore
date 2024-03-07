export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantityInStock?: number;
  type?: string;
  pictureUrl: string;
  brand: string;
}
