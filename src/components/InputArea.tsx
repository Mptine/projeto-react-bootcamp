type InputAreaProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export function InputArea(props: InputAreaProps) {
  return (
    <div className=" rounded border-double focus:border-red resize-none h-96 w-full">
      <p className=" text-xl font-semibold">Note:</p>
      <textarea
        className=" rounded border-double focus:border-red h-full w-full resize-none bg-[#3e3e42]"
        value={props.value}
        placeholder={props.placeholder}
        onChange={(event) => props.onChange(event.target.value)}
        rows={3}
      />
    </div>
  );
}
