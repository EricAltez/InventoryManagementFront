import { useState } from "react";
import ProductsList from "./product_list";
import Sales from "./sales";
import Stats from "./stats";

const renderComponent = () => {
  switch (state) {
    case "componente1":
      return <ProductsList />;
  }
};

interface MVDProps {
  state: string;
}

export default function mainViewDisplay(props: MVDProps) {
  const [state, setState] = useState("componente1");
  return (
    <div className="flex h-full w-full">
      {renderComponent(setState(props.state))}
    </div>
  );
}
