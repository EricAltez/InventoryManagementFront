import { useState } from "react";
import Input from "./input";

export default function Sales() {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [saleList, setSaleList] = useState<SaleProduct[]>([]);
  const [productIdError, setProductIdError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const addToList = async (event: any) => {
    event.preventDefault();
    // Validate inputs before adding to the list
    if (!productId || parseInt(productId) <= 0) {
      setProductIdError("Please enter a valid product id");
      return;
    }
    if (!quantity || parseInt(quantity) <= 0) {
      setQuantityError("Please enter a valid quantity");
      return;
    }

    // Add the product to the sale list if no errors
    setSaleList((prevList) => [
      ...prevList,
      { productId: parseInt(productId), quantity: parseInt(quantity) },
    ]);
    setProductId("");
    setQuantity("");
    setProductIdError(""); //Clean the error message
    setQuantityError(""); //Clean the error message
  };

  const makeSale = async (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="items-center justify-items-center max-auto min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold text-center mb-8">Sales</h1>

      <div className="lg:w-[1300px] grid grid-cols-1 lg:grid-cols-3 items-start gap-8 p-4 border-solid border-2 border-black rounded-lg">
        {/*add real object values*/}
        {/*define the fields to be used*/}

        {/*Form*/}
        <div className="p-4 border rounded-lg shadow">
          <h2 className="text-center text-lg text-black font-bold p-2">
            Add product
          </h2>
          <form
            onSubmit={addToList}
            className="items-center justify-items-center"
          >
            <div>
              <div className="w-[300px]">
                <label className="block mb-2">Product ID:</label>
                <Input
                  placeholder="product id"
                  value={productId}
                  type="number"
                  onChange={(value) => {
                    const numericValue = value.replace(/\D/g, "");
                    setProductId(numericValue);
                    setProductIdError(""); // Clean the error message
                  }}
                />
                {productIdError && (
                  <p className="text-red-500">{productIdError}</p>
                )}
              </div>
              <div className="w-[300px]">
                <label className="block mb-2">Quantity: </label>
                <Input
                  placeholder="quantity"
                  value={quantity}
                  type="number"
                  min="0"
                  onChange={(value) => {
                    const numericValue = value.replace(/\D/g, "");
                    setQuantity(numericValue);
                    setQuantityError(""); // Clean the error message
                  }}
                />
                {quantityError && (
                  <p className="text-red-500">{quantityError}</p>
                )}
              </div>
            </div>
            <div className="p-2">
              <button
                className="border-solid border-black bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={addToList}
              >
                Add to sale list
              </button>
            </div>
          </form>
        </div>

        {/*Products List*/}
        <div className="w-[400px] border-solid border-2 border-black p-4 rounded-lg">
          <h2 className="text-center text-lg text-black font-bold p-2">
            Sale List
          </h2>
          <ul className="space-y-2 text-black">
            <div className="flex justify-between">
              <span className="p-2">Product ID: </span>
              <span className="p-2">Quantity: </span>
            </div>
            {saleList.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="p-2">{item.productId}</span>
                <span className="p-2">{item.quantity}</span>
              </div>
            ))}
          </ul>
        </div>

        {/*Action button*/}
        <button
          className="border-solid border-black bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={makeSale}
        >
          Make Sale
        </button>
      </div>
    </div>
  );
}
