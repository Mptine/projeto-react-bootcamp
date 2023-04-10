import { MiniButton } from "./MiniButton";
import { Copy } from "./Copy";
import { IoIosCopy } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";

type NoteStaticProps = {
  id: number;
  title: string;
  subtitle: string;
  created_at: string;
  content: string;
};

export function NoteStatic(props: NoteStaticProps) {
  return (
    <li className="w-10/12 p-4 h-20 my-4 border-b border-[#3e3e42] no-underline items-start">
      <div>
        <div className="flex float-right items-center">
          <MiniButton
            onClick={() => Copy(props.content)}
            icon={
              <IoIosCopy className="text-white hover:text-[#CF6679] text-xl z-10" />
            }
          />
        </div>
        <Link
          to={`/notepads/:${props.id}/edit`}
          key={props.id}
          className="text-xs  text-white hover:text-red-400">
          <h1 className=" text-xl">{props.title}</h1>
          <p>{props.created_at}</p>
        </Link>
      </div>
    </li>
  );
}
