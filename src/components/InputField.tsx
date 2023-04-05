type InputFieldProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function InputField(props: InputFieldProps) {
  return (
    <input
      className=" rounded border-double focus:border-red"
      value={props.value}
      placeholder={props.placeholder}
      onChange={(event) => onChange(event.target.value)}
      type="text"
    />
  );
}
