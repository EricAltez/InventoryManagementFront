import { useState, useEffect } from "react";
import Input from "./input";

interface ProductSelectorProps {
  products: Product[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  quantity: string;
  setQuantity: (value: string) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (
    product: (Product & { quantity: number }) | null
  ) => void;
  addToList: (event: React.FormEvent) => void;
}

export default function ProductSelector({
  addToList,
  products,
  searchTerm,
  setSearchTerm,
  quantity,
  setQuantity,
  selectedProduct,
  setSelectedProduct,
}: ProductSelectorProps) {
  //Filter products based on search term
  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.id.toString().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [productIdError, setProductIdError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center">
        {/* Search input */}
        <input
          className="border rounded w-full"
          type="text"
          placeholder="Search product by name, id or description"
          value={selectedProduct?.name || searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* Clean button*/}
        <button
          type="button"
          className="h-full border border-solid text-black hover:text-red-500 text-lg font-bold focus:outline-none"
          onClick={() => setSelectedProduct(null)}
          tabIndex={0}
          aria-label="clean selection"
        >
          X
        </button>
      </div>
      {/* Product list */}
      {searchTerm && filteredProducts.length > 0 && (
        <ul className="border rounded mt-2 max-h-40 overflow-y-auto">
          {filteredProducts.map((product: Product) => (
            <li
              key={product.id}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSelectedProduct({ ...product, quantity: 0 });
                setSearchTerm("");
              }}
            >
              {product.name} (ID: {product.id}) - {product.description}
              {product.price}
            </li>
          ))}
        </ul>
      )}
      {productIdError && <p className="text-red-500">{productIdError}</p>}
      <Input
        className="w-full border rounded"
        placeholder="quantity"
        value={quantity}
        type="number"
        onChange={(value) => {
          const numericValue = value.replace(/\D/g, "");
          if (numericValue === "" || parseInt(numericValue) <= 0) {
            setQuantityError("Please enter a valid quantity");
          } else {
            setQuantityError(""); // Clean the error message
          }
          setQuantity(numericValue);
        }}
      />
      {quantityError && <p className="text-red-500">{quantityError}</p>}
      <div className="p-2">
        <button
          className="border-solid border-black bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={addToList}
        >
          Add to sale list
        </button>
      </div>
    </div>
  );
}
