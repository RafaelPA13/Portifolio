import tech from "../data/tech.json";

import CardTech from "../components/CardTech";
import DownloadButton from "../components/DowloadButton";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-gray-300 p-7 flex flex-col gap-5 h-screen overflow-auto">
      <h1 className="text-blue-900 text-3xl font-bold">Sobre Mim</h1>
      <p className="font-medium text-lg">
        Olá! Sou Rafael, tenho 18 anos e uma paixão de longa data por
        tecnologia. Desde pequeno, sempre fui curioso sobre o funcionamento de
        dispositivos como consoles, computadores e celulares, o que despertou
        meu desejo de construir minha carreira na área. Atualmente, estou
        cursando Engenharia de Software na FIAP, após concluir o Ensino Médio
        Técnico em Tecnologia na mesma instituição. Além disso, estou
        constantemente aprimorando minhas habilidades com cursos na Alura, onde
        exploro novas tecnologias e práticas do mercado. Meu foco é ingressar no
        setor de TI, onde pretendo aplicar minha paixão por tecnologia e
        inovação em projetos desafiadores e de impacto.
      </p>
      <h1 className="text-blue-900 text-3xl font-bold">Tecnologias</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tech.map((t) => (
          <CardTech key={t.id} {...t} />
        ))}
      </div>
      <div className="flex flex-col gap-3 lg md:flex-row">
        <h1 className="text-blue-900 text-3xl font-bold">
          Quer saber um pouco mais:
        </h1>
        <DownloadButton />
      </div>
    </div>
  );
}
