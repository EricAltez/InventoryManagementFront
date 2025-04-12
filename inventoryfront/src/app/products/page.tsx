"use client";

import ProductsList from "@/components/product_list";
import Sales from "@/components/sales";
import SideBarButon from "@/components/sidebar_buton";
import Stadistics from "@/components/stats";
import { useState } from "react";

export default function MainView() {
  const [activeview, setActiveView] = useState("products");
  const buttons = [
    { id: 1, name: "products" },
    { id: 2, name: "sales" },
    { id: 3, name: "statistics" },
  ];

  return (
    <div className="flex w-screen h-screen">
      <div className="sidebar h-full w-[200px]">
        <div>
          {buttons.map((b, index) => {
            return (
              <SideBarButon
                onClick={() => setActiveView(b.name)}
                key={index}
                name={b.name}
              />
            );
          })}
        </div>
      </div>
      <div className="flex w-full h-full">
        {activeview === "products" && <ProductsList />}
        {activeview === "sales" && <Sales />}
        {activeview === "statistics" && <Stadistics />}
      </div>
    </div>
  );
}
