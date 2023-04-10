import { Link } from "react-router-dom";
import { Home } from "../routes/Home";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";

export function AppFooter() {
  return (
    <div className=" fixed bottom-0 flex shadow-sm shadow-transparent h-28 items-center justify-center w-screen bg-black">
      <Link to="/">
        <IoLogoGithub className=" text-xl mx-2 text-white text-opacity-30 hover:text-opacity-100" />
      </Link>
      <Link to="/">
        <IoLogoLinkedin className=" text-xl mx-2 text-[#0077B5] text-opacity-30 hover:text-opacity-100" />
      </Link>
    </div>
  );
}
