import { AddNote } from "../components/AddNote";
import { NotePadStatic } from "./NotePadStatic";

export function Home() {
  return (
    <>
      <div>
        <div>
          <span className="font-bold align-top text-4xl">
            <p className="inline-block">
              Welcome to CopyBin, this page is a project to my ReactJs class.
              And I guarantee you this is not a cheap imitation of
              <a
                className="inline-block underline ml-2 mt-px"
                href="https://pastebin.com">
                pastebin.com
              </a>
            </p>
          </span>
          <p className=" text-xl to-slate-300">
            Feel free to leave your note below, or to browse recent public
            notes.
          </p>
        </div>
        <div className="flex flex-row">
          <div className=" flex-1 bg-white p-4">
            <AddNote />
          </div>
          <div className="w-96 bg-slate-200 right-0">
            <NotePadStatic />
          </div>
        </div>
      </div>
    </>
  );
}
