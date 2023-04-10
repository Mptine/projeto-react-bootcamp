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
  const createdDate = new Date(props.created_at);
  const now = new Date();
  const elapsedMs = now.getTime() - createdDate.getTime();
  const elapsedSeconds = Math.floor(elapsedMs / 1000);

  let elapsed;
  if (elapsedSeconds < 60) {
    elapsed = `${elapsedSeconds} seconds ago`;
  } else if (elapsedSeconds < 3600) {
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    elapsed = `${elapsedMinutes} minutes ago`;
  } else if (elapsedSeconds < 86400) {
    const elapsedHours = Math.floor(elapsedSeconds / 3600);
    elapsed = `${elapsedHours} hours ago`;
  } else {
    const elapsedDays = Math.floor(elapsedSeconds / 86400);
    elapsed = `${elapsedDays} days ago`;
  }

  return (
    <li className="w-10/12 p-1 h-20 my-4border-b border-[#3e3e42] no-underline items-start">
      <div>
        <div className="flex float-right items-center ">
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
          className=" text-xs  text-white hover:text-red-400">
          <h1 className=" text-sm">{props.title}</h1>
          <p>Created {elapsed}</p>
        </Link>
      </div>
    </li>
  );
}
