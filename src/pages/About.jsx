import tech from "../data/tech.json";

import CardTech from "../components/CardTech";
import SlideShow from "../components/SlideShow";
import DownloadButton from "../components/DowloadButton";

export default function About() {
  const certificateList = [
    {
      curso: "Certificado ChatGPT e JavaScript Construa o jogo Pong",
      certificado: "/Certificado_ChatGPT-e-JavaScript_Construa-o-jogo-Pong.png"
    },
    {
      curso: "Certificado Java Aplicando orientacao a objetos",
      certificado: "/Certificado_Java_Aplicando_orientacao_a_objetos.png"
    },
    {
      curso: "Certificado Java Consumindo API gravando arquivos e lidando com erros",
      certificado: "/Certificado_Java_Consumindo_API_gravando_arquivos_e_lidando_com_erros.png"
    },
    {
      curso: "Certificado Java Criando sua primeira aplicacao",
      certificado: "/Certificado_Java_Criando_sua_primeira_aplicacao.png"
    },
    {
      curso: "Certificado Java Trabalhando com lambdas streams Spring Framework",
      certificado: "/Certificado_Java_Trabalhando_com_lambdas_streams_Spring_Framework.png"
    },
    {
      curso: "Certificado Java Trabalhando com listas e colecoes de dados",
      certificado: "/Certificado_Java_Trabalhando_com_listas_e_colecoes_de_dados.png"
    },
    {
      curso: "Certificado Excel Domine o Editor de Planilhas",
      certificado: "/Certificado_Excel_Domine_o_Editor_de_Planilhas.png"
    },
  ]

  return (
    <div className="bg-gradient-to-r from-gray-300 p-7 flex flex-col gap-5 h-screen overflow-auto">
      <h1 className="text-blue-900 text-3xl font-bold">Sobre Mim</h1>
      <p className="font-medium text-lg">
        Olá! Sou Rafael, tenho 19 anos e uma paixão de longa data por
        tecnologia. Atualmente, sou estudante de Engenharia de Software na FIAP
        e concluí o Ensino Médio Técnico em Tecnologia na mesma instituição.
        Durante minha formação, desenvolvi uma sólida base em programação e
        experiência prática em diversas áreas de tecnologia, incluindo
        desenvolvimento web e backend.
      </p>
      <p className="font-medium text-lg">
        Estou buscando uma oportunidade que me permita aplicar meus
        conhecimentos em um ambiente real de trabalho, expandir minhas
        habilidades e colaborar no desenvolvimento de soluções inovadoras. Estou
        certo de que meu comprometimento com o aprendizado e minhas competências
        técnicas me tornam um candidato ideal para a sua empresa.
      </p>
      <h1 className="text-blue-900 text-3xl font-bold">Tecnologias</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {tech.map((t) => (
          <CardTech key={t.id} {...t} />
        ))}
      </div>
      <h1 className="text-blue-900 text-3xl font-bold">Meus Cetificados</h1>
      <SlideShow list={certificateList} />
      <div className="flex flex-col gap-3 lg md:flex-row">
        <h1 className="text-blue-900 text-3xl font-bold">
          Quer saber um pouco mais:
        </h1>
        <DownloadButton />
      </div>
    </div>
  );
}
