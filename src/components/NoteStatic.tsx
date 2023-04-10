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
      <div
        key={props.id}
        className="w-11/12 p-1 h-16 my-1 text-xs hover:shadow-lg-invert border-t border-[#3e3e42]">
        <div>
          <div className="flex float-right items-center">
            <MiniButton
              onClick={() => Copy(props.content)}
              icon={<IoIosCopy className="text-[#CF6679] text-xl" />}
            />
          </div>
          <h1 className=" text-xl">{props.title}</h1>
          <p>{props.created_at}</p>
        </div>
      </div>
    </>
  );
}
