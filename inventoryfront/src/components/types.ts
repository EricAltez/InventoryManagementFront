type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
};

type ProductToSale = {
  id: number;
  name: string;
  price: number;
  totalPrice: number;
  description: string;
  stock: number;
  quantity: number;
};

type Sale = {
  total: number;
  products: ProductToSale[];
};
