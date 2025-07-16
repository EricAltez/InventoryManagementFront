import { useState, useEffect } from "react";
import ProductSelector from "./product_selector";
import SaleList from "./sale_list";

export default function Sales() {
  const [products, setProducts] = useState<ProductToSale[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<
    (Product & { quantity: number }) | null
  >(null);
  const [quantity, setQuantity] = useState("");
  const [saleList, setSaleList] = useState<ProductToSale[]>([]);

  //Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/product");
        if (!response.ok) {
          throw new Error("failed to fetch products");
        }
        const data: ProductToSale[] = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  //handle adding a product to the sale list
  const addToList = async (event: any) => {
    event.preventDefault();
    // Validate inputs before adding to the list
    if (!selectedProduct || !quantity || parseInt(quantity) <= 0) {
      alert("Please select a product and enter a valid quantity");
      return;
    }
    if (selectedProduct.stock < parseInt(quantity)) {
      alert("Insufficient stock for the selected product");
      return;
    }

    // Add the product to the sale list
    setSaleList((prevList) => [
      ...prevList,
      {
        id: selectedProduct.id,
        name: selectedProduct.name,
        description: selectedProduct.description,
        stock: selectedProduct.stock,
        quantity: parseInt(quantity),
        price: selectedProduct.price,
        // Calculate total price based on quantity
        totalPrice: selectedProduct.price * parseInt(quantity),
      },
    ]);
    setSelectedProduct(null); // Clear the selected product
    setQuantity("");
  };

  //handle making a sale
  const makeSale = async (event: any) => {
    event.preventDefault();
    // Validate sale list before making a sale
    if (saleList.length === 0) {
      alert("Please add products to the sale list before making a sale.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/sale", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ saleList }),
      });
      console.log("Response:", response);

      if (!response.ok) {
        throw new Error("Failed to make sale");
      }

      const data = await response.json();
      alert("Sale made successfully!");
      setSaleList([]); // Clear the sale list after successful sale
    } catch (error) {
      console.error("Error making sale:", error);
      alert("Failed to make sale. Please try again.");
    }
  };

  return (
    // Main container
    <div className="items-center justify-items-center max-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center mb-8">Sales</h1>
      {/* Main content area */}
      <div
        id="Main content"
        className="flex lg:w-[1500px] grid-cols-1 lg:grid-cols-2 items-start gap-8 p-4 border-solid border-2 border-black rounded-lg"
      >
        {/*Form*/}
        <div id="Form" className="w-1/3 p-4 border rounded-lg shadow">
          <h2 className="text-center text-lg text-black font-bold p-2">
            Add product
          </h2>
          <form
            onSubmit={addToList}
            className="items-center justify-items-center"
          >
            {/*Product selector*/}
            <ProductSelector
              addToList={addToList}
              products={products}
              quantity={quantity}
              setQuantity={setQuantity}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
            />
          </form>
        </div>
        <SaleList saleList={saleList} makeSale={makeSale} />
      </div>
    </div>
  );
}
