export default function DownloadButton() {
  const dowload = () => {
    const pdfUrl = "/Curriculo.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button
      onClick={dowload}
      className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-400 transition duration-300"
    >
      Baixar
    </button>
  );
}
