import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

import CardProject from "../components/CardProject";

export default function DetailProject() {
  const { id } = useParams();

  return (
    <div className="bg-gradient-to-r from-gray-300 p-5 flex flex-col gap-5 h-screen overflow-scroll">
      {projects
        .filter((project) => project.id == id)
        .map((project) => (
          <div className="bg-gray-300 shadow-gray-400 shadow-md rounded-lg p-5 flex flex-col items-center justify-center gap-7 lg:flex-row gap-24">
            <div className="lg:w-1/2">
              <img
                src={project.imagem}
                alt={project.nome}
                className="w-full rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-3 lg:w-1/2">
              <div className="flex flex-wrap items-center gap-6">
                <h1 className="text-4xl text-blue-900 font-bold">
                  {project.nome}
                </h1>
                <ul className="flex gap-3">
                  {project.tecnologias.map((tecnologia) => (
                    <li key={tecnologia}>
                      <span className="bg-indigo-600 text-white font-semibold p-2 rounded-lg">
                        {tecnologia}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="font-medium">{project.descricao}</p>
              <div className="flex gap-4">
                <a
                  href={project.linkRepositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300"
                >
                  Repositório
                </a>
                {project.linkTeste == "" ? null : (
                  <a
                    href={project.linkTeste}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300"
                  >
                    Teste
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      <h1 className="text-3xl text-blue-900 font-bold">Outros Projetos</h1>
      <ul>
        <ul className="w-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {projects
            .filter((project) => project.id != id)
            .map((project) => (
              <CardProject key={project.id} {...project} />
            ))}
        </ul>
      </ul>
    </div>
  );
}
