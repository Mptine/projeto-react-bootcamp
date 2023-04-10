import { Breadcrumb } from "../components/Breadcrumb";
export function About() {
  const breadcrumbLinks = [
    { title: "Home > ", link: "/" },
    { title: " About", link: "/about" },
  ];
  return (
    <div>
      <Breadcrumb links={breadcrumbLinks} />
      <div className=" h-screen flex flex-col items-center justify-center pb-80">
        <div className="flex flex-row">
          <div className="text-white text-4xl ">
            This site is a project for my ReactJs class. It is inspired by
            PasteBin website, and it's intended to exercise our skills in React
            Hooks, Axios, TailwindCss styling, Routes and TSX elements design.
          </div>
          <div className="w-2/12"></div>
        </div>
        <p className="text-red-400 text-2xl text-left">
          Created by Matheus Pires
        </p>
        <p className="text-red-400">matheus.tine@al.edu.infinet.br</p>
      </div>
    </div>
  );
}
