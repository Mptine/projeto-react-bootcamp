import { MiniButton } from "./MiniButton";
import { Copy } from "./Copy";
import { IoIosCopy } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

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
        <div className="bg-white text-black p-1 rounded-xl h-28 my-1 border text-xs">
          <div className="flex float-right items-center drop-shadow-xl">
            <MiniButton
              onClick={() => Copy(props.content)}
              icon={<IoIosCopy className="text-red-400 text-xl" />}
            />
            <MiniButton
              onClick={() => Copy(props.content)}
              icon={<IoIosClose className="text-red-400 text-5xl" />}
            />
          </div>
          <div>{props.id}</div>
          <h1 className=" text-xl">{props.title}</h1>
          <h2>{props.subtitle}</h2>
          <p>{props.created_at}</p>
        </div>
      </div>
    </>
  );
}
