import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <ul>
        <li>
          <Link to={"/sobre"}>Sobre</Link>
        </li>
        <li>
          <Link to={"/contato"}>Contato</Link>
        </li>
        <li>
          <Link to={"/projetos"}>Projetos</Link>
        </li>
      </ul>
    </header>
  );
}
