import Product from "./product";

export default function ProductsList() {
  const products = [
    {
      id: 1,
      name: "seditas",
      price: 2,
      description: "alta seditas mono",
      quantity: 666,
    },
    {
      id: 2,
      name: "elquemas pica",
      price: 100,
      description: "alto desmo",
      quantity: 25,
    },
    {
      id: 3,
      name: "India chemicalll Kingsadas xxssxssl",
      price: 20,
      description: "Seda chemical extra king size",
      quantity: 100,
    },
  ];

  return (
    <div className="flex">
      <div className="flex flex-wrap overflow-auto justify-around gap-y-1 gap-x-1 h-[800px] w-[1500px]">
        {products.map((p, index) => {
          return (
            <Product
              key={index}
              name={p.name}
              price={p.price}
              description={p.description}
              quantity={p.quantity}
            />
          );
        })}
      </div>
    </div>
  );
}
