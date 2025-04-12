import SideBarButon from "./sidebar_buton";

export default function Sidebar() {
  const butons = [
    { id: 1, name: "products" },
    { id: 2, name: "sell" },
    { id: 3, name: "estadistics" },
  ];
  return (
    <div className="sidebar h-full w-[200px]">
      <div>
        {butons.map((b, index) => {
          return <SideBarButon onClick={() => {}} key={index} name={b.name} />;
        })}
      </div>
    </div>
  );
}
