export default function ButtonTech({ tech, getValue }) {
  return (
    <button
      className="w-full bg-gray-400 text-blue-950 font-bold border border-blue-950 py-2 hover:bg-gray-300 transition duration-300"
      onClick={() => getValue(tech)}
    >
      {tech}
    </button>
  );
}
