import tech from "../data/tech.json";

import CardTech from "../components/CardTech";
import DownloadButton from "../components/DowloadButton";

export default function About() {
  return (
    <div className="bg-gradient-to-r from-gray-300 p-7 flex flex-col gap-5 h-screen overflow-auto">
      <h1 className="text-blue-900 text-3xl font-bold">Sobre Mim</h1>
      <p className="font-medium text-lg">
        Sou Rafael, tenho 18 anos e sou um amante da tecnologia. Desde criança,
        sempre tive interesse em entender como as coisas funcionavam ou como
        eram feitas, principalmente quando se tratava de artigos tecnológicos,
        jogos, consoles, computadores ou celulares. Foi então que decidi estudar
        TI, para que eu pudesse trabalhar com o que mais gosto. Atualmente,
        estou cursando Engenharia de Software na FIAP. Além disso, concluí o
        Ensino Médio Técnico em Tecnologia também na FIAP e tenho me aventurado
        em cursos da Alura. Meu principal objetivo hoje é conseguir ingressar e
        trabalhar na área.
      </p>
      <h1 className="text-blue-900 text-3xl font-bold">Tecnologias</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tech.map((t) => (
          <CardTech key={t.id} {...t} />
        ))}
      </div>
      <div className="flex flex-col gap-3 lg md:flex-row">
        <h1 className="text-blue-900 text-3xl font-bold">Quer saber um pouco mais:</h1>
        <DownloadButton />
      </div>
    </div>
  );
}
