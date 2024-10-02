import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/rafael-porto-annunciato-751512265"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/rafaportann__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiInstagramFill />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/RafaelPA13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
}
