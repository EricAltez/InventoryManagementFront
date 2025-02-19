interface InputProps {
  type: string;
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (value: any) => void;
}

export default function Input(props: InputProps) {
  return (
    <div>
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
