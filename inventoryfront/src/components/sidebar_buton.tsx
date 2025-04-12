interface SideBarButonProps {
  name: string;
  onClick: () => void;
}

export default function SideBarButon(props: SideBarButonProps) {
  return (
    <button
      onClick={props.onClick}
      className="buton_container h-full w-[180px] border border-black border-1 p-2"
    >
      <p className="text-black">{props.name}</p>
    </button>
  );
}
