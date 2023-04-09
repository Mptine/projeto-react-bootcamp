type InputFieldProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function InputField(props: InputFieldProps) {
  return (
    <div className=" w-60">
      <p className=" text-xl font-semibold">{props.placeholder}:</p>
      <input
        className=" rounded border-double focus:border-red h-10"
        value={props.value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
      />
    </div>
  );
}
