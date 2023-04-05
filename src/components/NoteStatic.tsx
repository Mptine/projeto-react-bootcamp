import { MiniButton } from "./MiniButton";
import { Copy } from "./Copy";
import { IoIosCopy } from "react-icons/io";

type NoteStaticProps = {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  content: string;
};

export function NoteStatic(props: NoteStaticProps) {
  return (
    <>
      <div key={props.id} className="w-11/12">
        <div className="bg-white text-black p-1 rounded-xl h-36 my-1 border shadow-md">
          <MiniButton
            onClick={() => Copy(props.content)}
            source={props.content}
            icon={<IoIosCopy />}
          />
          <div>{props.id}</div>
          <h1 className=" text-xl">{props.title}</h1>
          <h2>{props.subtitle}</h2>
          {/* <p>{props.content}</p> */}
          <p>{props.created_at}</p>
        </div>
      </div>
    </>
  );
}
