import { AddNote } from "../components/AddNote";
import { NotePadStatic } from "./NotePadStatic";

export function Home() {
  return (
    <>
      <div className=" w-10/12 h-screen text-white bg-[#272728] border-l border-[#3e3e42] p-4">
        <div>
          <span className="font-bold align-top text-4xl my-4">
            <p className="inline-block">
              Welcome to CopyBin, this page is a project to my ReactJs class.
              And I guarantee you this is not a cheap imitation of
              <a
                className="inline-block ml-2 mt-px"
                href="https://pastebin.com">
                pastebin.com
              </a>
            </p>
          </span>
          <p className=" text-xl my-4">
            Feel free to leave your note below, or to browse recent public
            notes.
          </p>
        </div>
        <div className="flex flex-row h-full">
          <div className=" flex-1 p-4">
            <AddNote />
          </div>
          <div className=" w-4/12 right-0 border-l border-[#3e3e42]">
            <NotePadStatic />
          </div>
        </div>
      </div>
    </>
  );
}
