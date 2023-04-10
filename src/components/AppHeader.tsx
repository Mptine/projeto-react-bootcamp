import { Link } from "react-router-dom";
import { Home } from "../routes/Home";

export function AppHeader() {
  return (
    <div className="flex shadow-sm shadow-transparent h-14 items-center justify-start w-screen bg-[#3e3e42]">
      <div className=" w-2/12"></div>
      <Link className=" text-2xl font-bold mr-20  text-[#CF6679]" to="/">
        CopyBin
      </Link>
      <Link className="mr-20  text-white" to="/notepads">
        Notes
      </Link>
      <Link className="mr-20  text-white" to="/about">
        About
      </Link>
    </div>
  );
}
