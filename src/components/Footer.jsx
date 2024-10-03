import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul className="pt-6 gap-1 border-t-2 border-gray-300">
        <li>
          <a
            href="https://www.linkedin.com/in/rafael-porto-annunciato-751512265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl font-semibold flex items-center cursor-pointer p-2 hover:bg-slate-400 rounded-md hover:text-blue-950"
          >
            <FaLinkedin />
            <span className="hidden ms-4 lg md:block">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rafaportann__/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl font-semibold flex items-center cursor-pointer p-2 hover:bg-slate-400 rounded-md hover:text-blue-950"
          >
            <RiInstagramFill />
            <span className="hidden ms-4 lg md:block">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RafaelPA13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 text-xl font-semibold flex items-center cursor-pointer p-2 hover:bg-slate-400 rounded-md hover:text-blue-950"
          >
            <FaGithub />
            <span className="hidden ms-4 lg md:block">Github</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}
