type InputAreaProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function InputArea(props: InputAreaProps) {
  return (
    <textarea
      className=" rounded border-double focus:border-red"
      value={props.value}
      placeholder={props.placeholder}
      onChange={(event) => onChange(event.target.value)}
      rows={3}
      className=" h-3/5 w-full my-4"
    />
  );
}
