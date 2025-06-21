import { useEffect, useState } from "react";
import Product from "./product";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/product");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Product[] = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-wrap overflow-auto justify-around gap-y-1 gap-x-1 h-[800px] w-[1500px]">
        {products?.map((p, index) => {
          return (
            <Product
              key={index}
              name={p.name}
              price={p.price}
              description={p.description}
              stock={p.stock}
            />
          );
        })}
      </div>
    </div>
  );
}
