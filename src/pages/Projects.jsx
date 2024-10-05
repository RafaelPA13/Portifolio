import { useState } from "react";
import projects from "../data/projects.json";

import ButtonTech from "../components/ButtonTech";
import CardProject from "../components/CardProject";

export default function Projects() {
  const [language, setLanguage] = useState("Todos");

  const getValue = (tech) => {
    setLanguage(tech);
  };

  const filterProjects = projects.filter((project) =>
    project.tecnologias.some((tech) => tech.tech === language)
  );

  return (
    <div className="w-full h-screen bg-gradient-to-r from-gray-300 p-7 flex flex-col items-center gap-5">
      <h1 className="w-full text-5xl text-blue-900 font-bold text-left">
        Projetos
      </h1>
      <ul className="w-full grid grid-cols-3 md:grid-cols-6 lg:grid-cols-7">
        <li className="w-full">
          <ButtonTech tech={"HTML"} getValue={getValue} />
        </li>
        <li className="w-full">
          <ButtonTech tech={"CSS"} getValue={getValue} />
        </li>
        <li className="w-full">
          <ButtonTech tech={"JavaScript"} getValue={getValue} />
        </li>
        <li className="w-full">
          <ButtonTech tech={"Java"} getValue={getValue} />
        </li>
        <li className="w-full">
          <ButtonTech tech={"React"} getValue={getValue} />
        </li>
        <li className="w-full">
          <ButtonTech tech={"Python"} getValue={getValue} />
        </li>
        <li className="w-full">
          <ButtonTech tech={"Todos"} getValue={getValue} />
        </li>
      </ul>
      <ul className="w-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {language === "Todos"
          ? projects.map((project) => (
              <CardProject key={project.id} {...project} />
            ))
          : filterProjects.map((project) => (
              <CardProject key={project.id} {...project} />
            ))}
      </ul>
    </div>
  );
}
