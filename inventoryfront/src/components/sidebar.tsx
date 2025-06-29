import SideBarButon from "./sidebar_buton";

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="sidebar h-full w-[220px] bg-gray-300 shadow-lg flex-col py-6 px-2">
      {children}
    </div>
  );
}
