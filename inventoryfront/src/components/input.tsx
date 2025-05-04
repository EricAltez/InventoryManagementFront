interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label?: string;
  value: string;
  min?: "0";
  placeholder?: string;
  onChange: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div className="border-black border-solid border-2">
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        className="text-black"
        required
        rounded-lg="true"
        value={props.value}
        onChange={(e: any) => props.onChange(e.target.value)}
      />
    </div>
  );
}
