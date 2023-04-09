type InputAreaProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function InputArea(props: InputAreaProps) {
  return (
    <>
      <p className=" text-xl font-semibold">{props.placeholder}:</p>
      <textarea
        className=" rounded border-double focus:border-red h-3/5 w-full my-4 resize-none"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(event) => onChange(event.target.value)}
        rows={3}
      />
    </>
  );
}
