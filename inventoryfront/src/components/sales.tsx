import { useState } from "react";
import Input from "./input";

export default function Sales() {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [saleList, setSaleList] = useState<SaleProduct[]>([]);

  const addToList = async (event: any) => {
    event.preventDefault();
    setSaleList((prevList) => [
      ...prevList,
      { productId: parseInt(productId), quantity: parseInt(quantity) },
    ]);
  };

  const makeSale = async (event: any) => {
    event.preventDefault();
  };

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <div>
          <form onSubmit={addToList}>
            <div>
              <Input
                placeholder="product id"
                value={productId}
                type="productId"
                onChange={(value) => setProductId(value)}
              />
            </div>
            <div>
              <Input
                placeholder="quantity"
                value={quantity}
                type="quantity"
                onChange={(value) => setQuantity(value)}
              />
            </div>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={addToList}
              >
                Add to sale list
              </button>
            </div>
          </form>

          <div className="mt-8 border-solid border-2 border-black p-4 rounded-lg">
            <h2 className="text-lg text-black font-bold">Sale List</h2>
            <div className="mt-4 text-black">
              {saleList.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>Product ID: {item.productId}</span>
                  <span>Quantity: {item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          onClick={makeSale}
        >
          Make Sale
        </button>
      </div>
    </div>
  );
}
