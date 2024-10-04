import { Link } from "react-router-dom";

export default function CardProject({ id, nome, imagem, tecnologias }) {
  return (
    <Link to={`/projetos/${id}`}>
      <img src={imagem} alt={`Foto do projeto ${nome}`} />
      <h2>{nome}</h2>
      <ul>
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia.tech} className={tecnologia.classe}>
            {tecnologia.tech}
          </li>
        ))}
      </ul>
    </Link>
  );
}
