import React from "react";
import logosena from './assets/logosena.png';
import html from './assets/html.png';
import css from './assets/css logo.png';
import javascript from './assets/javascript.png';
import react from './assets/react.png';
import perfil from './assets/perfil.png';

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800 bg-gradient-to-b from-pink-200 to-pink-50 min-h-screen">

      <section className="py-16 px-6 text-center">
        <img src={perfil} alt="perfil"
          className="w-32 h-32 md:w-48 md:h-48 object-cover mx-auto rounded-full border-4 border-white shadow-lg transition-transform duration-500 hover:scale-105" />
        <h1 className="text-5xl font-extrabold mt-6">Leidy Yuliana Ramirez</h1>
        <p className="text-lg mt-2 text-pink-600 font-medium">Desarrolladora Web | Frontend</p>
        <p className="mt-4 max-w-6xl mx-auto text-gray-1000 ">
          Soy estudiante de Análisis y Desarrollo de Software en el SENA. Me especializo en crear soluciones funcionales y atractivas, aplicando buenas prácticas de programación y diseño. Este portafolio muestra algunos de mis proyectos y habilidades en constante crecimiento.
        </p>
      </section>

      <section className="py-14 px-6 bg-white shadow-inner">
  <h2 className="text-3xl font-semibold mb-10 text-center text-pink-600">HABILIDADES</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
    {[{ img: html, name: "HTML" }, { img: css, name: "CSS" }, { img: javascript, name: "JAVASCRIPT" }, { img: react, name: "REACT" }]
      .map(({ img, name }, i) => (
        <div key={i} className="flex flex-col items-center transform transition-transform hover:scale-110">
          <img
            src={img}
            alt={name}
            className="w-80 h-40 object-contain rounded-lg shadow-md mb-2 bg-zinc-200"
          />
          <p className="text-lg font-medium">{name}</p>
        </div>
      ))}
  </div>
</section>


      <section className="py-14 px-6 bg-pink-200">
        <h2 className="text-3xl font-semibold mb-10 text-center text-pink-600">PROYECTOS</h2>
        <div className="flex justify-center gap-10 flex-wrap">

       
          <div className="bg-white rounded-xl shadow-xl p-9 w-80 hover:scale-105 transition-transform duration-300 animate-fade-in">
            <div className="h-32 w-full flex items-center justify-center mb-4">
              <img
                src={logosena}
                alt="Logo SENA"
                className="w-28 h-28 object-contain rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800">Contador</h3>
            <p className="text-sm text-center text-gray-600 mt-2 mb-4">
              Pequeño ejercicio que muestra el funcionamiento de un contador.
            </p>
            <a
              href="https://github.com/Yulianaperdomo/mi-primera-app"
              className="block text-center text-pink-500 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </a>
          </div>

          
          <div className="bg-white rounded-xl shadow-xl p-9 w-80 hover:scale-105 transition-transform duration-300 animate-fade-in">
            <div className="h-32 w-full flex items-center justify-center mb-4">
              <img
                src={logosena}
                alt="Logo SENA"
                className="w-28 h-28 object-contain rounded-lg shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800">Servidores</h3>
            <p className="text-sm text-center text-gray-600 mt-2 mb-4">
              Ejercicio explicando conceptos, ventajas y desventajas de servidores, con imágenes alusivas.
            </p>
            <a
              href="https://github.com/Yulianaperdomo/servidores.git"
              className="block text-center text-pink-500 font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-100 text-gray-800 py-6 text-center mt-10">
        <p className="font-semibold">YULIANA PERDOMO</p>
        <p>
          correo: <a className="text-pink-600" href="mailto:perdomoy237@gmail.com">perdomoy237@gmail.com</a>
        </p>
        <p>WhatsApp: 3144003113</p>
        <div className="flex justify-center gap-6 mt-3">
          <a href="#" className="hover:text-pink-600">LinkedIn</a>
          <a href="#" className="hover:text-pink-600">GitHub</a>
          <a href="#" className="hover:text-pink-600">Instagram</a>
        </div>
      </footer>
    </div>
  );
}

