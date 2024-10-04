import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
    };

    if (name === "" || email === "" || message === "") {
      alert("Preencha todos os campos para enviar uma mensagem!");
      return;
    }
    emailjs.send(
      "service_rcybvft",
      "template_5popb45",
      templateParams,
      "Z3prrJf6H3Mt-8iUF"
    );

    console.log(name, email, message);
    alert("Mensagem enviado com sucesso!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-gradient-to-r from-gray-300 p-4 h-screen flex flex-col items-center justify-center gap-8 lg md:p-7">
      <h1 className="text-4xl text-blue-900 font-bold lg md:text-5xl">
        Fale comigo
      </h1>
      <form
        className="w-full flex flex-col items-start gap-5 lg:w-1/2"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          placeholder="Nome:"
          className="w-full p-3 border-2 border-blue-900 rounded-lg text-blue-900 outline-none placeholder:text-gray-400 font-medium"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="E-mail:"
          className="w-full p-3 border-2 border-blue-900 rounded-lg text-blue-900 outline-none placeholder:text-gray-400 font-medium"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <textarea
          placeholder="Mensagem:"
          className="w-full h-64 p-3 border-2 border-blue-900 rounded-lg text-blue-900 outline-none resize-none placeholder:text-gray-400 font-medium"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button
          className="w-full bg-blue-900 text-white font-semibold rounded-lg py-2 hover:bg-blue-700 transition duration-300 lg md:w-1/3"
          type="submit"
          onClick={sendEmail}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
