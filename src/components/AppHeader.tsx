import { Link } from "react-router-dom";
import { Home } from "../routes/Home";

export function AppHeader() {
  return (
    <div className="flex shadow-md h-14 items-center justify-start w-screen">
      <div className=" w-2/12"></div>
      <Link className=" text-2xl font-bold mr-20" to="/">
        CopyBin
      </Link>
      <Link className="mr-20" to="/notepads">
        Notes
      </Link>
      <Link className="mr-20" to="/about">
        About
      </Link>
    </div>
  );
}