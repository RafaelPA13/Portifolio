export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-300 flex items-center">
      <div className="w-full px-4 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h4 className="font-medium text-gray-800">Olá, Sou Rafael 👋</h4>
          <h1 className="text-5xl font-bold text-blue-900 mt-2">
            Estudante em enhenharia de software
          </h1>
          <p className="text-gray-600 mt-4">
            Estou pronto para tranformar a sua ideia em realidade.
          </p>
        </div>
        <div class="mt-5 lg:mt-0 lg:w-1/2">
          <img
            src="/Perfil.jpg"
            alt="Minha foto"
            className="w-full h-auto rounded-lg lg:h-svh"
          />
        </div>
      </div>
    </div>
  );
}
