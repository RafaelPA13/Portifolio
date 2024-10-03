import { Link } from "react-router-dom";
import Footer from "./Footer";

import { FaInfoCircle } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { GrProjects } from "react-icons/gr";

export default function Header() {
  return (
    <header className="w-20 lg md:w-60 h-screen p-5 pt-8 bg-blue-950 flex flex-col justify-between">
      <div>
      <Link to={"/"}>
        <img
          src="/logo_portifolio.png"
          alt="logo"
          className="cursor-pointer duration-500"
        />
      </Link>
      <ul className="pt-6 gap-1">
        <li>
          <Link
            to={"/sobre"}
            className="text-gray-300 text-xl font-semibold flex items-center cursor-pointer p-2 hover:bg-slate-400 rounded-md hover:text-blue-950"
          >
            <FaInfoCircle />
            <span className="hidden ms-4 lg md:block">Sobre</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/contato"}
            className="text-gray-300 text-xl font-semibold flex items-center cursor-pointer p-2 hover:bg-slate-400 rounded-md hover:text-blue-950"
          >
            <MdMessage />
            <span className="hidden ms-4 lg md:block">Contato</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/projetos"}
            className="text-gray-300 text-xl font-semibold flex items-center cursor-pointer p-2 hover:bg-slate-400 rounded-md hover:text-blue-950"
          >
            <GrProjects />
            <span className="hidden ms-4 lg md:block">Projetos</span>
          </Link>
        </li>
      </ul>
      </div>
      <Footer />
    </header>
  );
}
