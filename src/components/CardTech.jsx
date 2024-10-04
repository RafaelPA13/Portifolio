export default function CardTech({ tech, img }) {
  return (
    <div className="bg-white border-2 border-blue-900 rounded-lg p-5 flex flex-col items-center justify-center gap-3 shadow-sm shadow-gray-500 hover:scale-95 transition duration-300">
      <img src={img} alt={tech} className="size-40" />
      <h2 className="text-blue-900 text-lg font-semibold">{tech}</h2>
    </div>
  );
}
