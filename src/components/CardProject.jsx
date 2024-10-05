import { Link } from "react-router-dom";

export default function CardProject({ id, nome, imagem, tecnologias }) {
  return (
    <Link
      to={`/projetos/${id}`}
      className="bg-white border-2 border-blue-900 rounded-lg gap-3 shadow-sm shadow-gray-500 hover:scale-95 transition duration-300 p-3 lg:p-5"
    >
      <img src={imagem} alt={`Foto do projeto ${nome}`} className="h-auto w-full lg:h-64" />
      <h2 className="text-xl font-semibold text-blue-900 my-3">{nome}</h2>
      <ul className="flex flex-wrap gap-3">
        {tecnologias.map((tecnologia) => (
          <li key={tecnologia.tech}>
            <span className={`${tecnologia.classe} text-white font-semibold p-2 rounded-lg`}>{tecnologia.tech}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}
