import { useState } from "react";

interface SaleListProps {
  saleList: SaleProduct[];
  makeSale: (event: React.FormEvent) => void;
}

export default function SaleList({ saleList, makeSale }: SaleListProps) {
  const total = saleList.reduce(
    (acc: number, item: SaleProduct) => acc + item.totalPrice,
    0
  );

  return (
    <div className="flex w-2/3 border-solid border-2 border-black p-4 rounded-lg">
      {/*Sale List*/}
      <div className="lg:w-[700px] border-solid border-2 border-black p-4 rounded-lg">
        <h2 className="text-center text-lg text-black font-bold p-2">
          Sale List
        </h2>
        <ul className="space-y-2 text-black">
          <li>
            <div className="grid grid-cols-5 justify-between">
              <p className="p-2">ID:</p>
              <p className="p-2">Name:</p>
              <p className="p-2">Description:</p>
              <p className="p-2">Quantity: </p>
              <p>price:</p>
            </div>
          </li>
          {saleList.map((item, index) => (
            <li>
              <div key={index} className="grid grid-cols-5 justify-between">
                <p className="p-2">{item.id}</p>
                <p className="p-2">{item.name}</p>
                <p className="p-2">{item.description}</p>
                <p className="p-2">{item.quantity}</p>
                <p className="p-2">{item.totalPrice}</p>
              </div>
            </li>
          ))}
          <li>
            <div className="grid grid-cols-5 justify-between">
              <p className="p-2 col-span-4 text-right">Total:</p>
              <p className="p-2">{total}</p>
            </div>
          </li>
        </ul>
      </div>
      {/*Action button*/}
      <button
        className="w-[200px] h-[50px] border-solid border-black bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={makeSale}
      >
        Make Sale
      </button>
    </div>
  );
}
