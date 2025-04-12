interface ProductProps {
  name: string;
  price: number;
  description: string;
  stock: number;
}

export default function Product(props: ProductProps) {
  return (
    <div className="product_container w-52 min-w-52 min-h-64 h-64 overflow-hidden rounded-lg shadow-lg text-black align-middle text-sm text-center border border-black border-1 p-2">
      <img className="product_image border h-28 rounded-lg w-full border-black border-1 p-4"></img>
      <h2 className="name text-xl font-bold">{props.name}</h2>
      <div className="quantity_and_price felx p-4">
        <div>${props.price}</div>
        <div>C:{props.stock}</div>
      </div>
      <div className="product_description">{props.description}</div>
    </div>
  );
}
