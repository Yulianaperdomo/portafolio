import React from "react";
import logosena from './assets/logosena.png';
import html from './assets/html.png';
import react from './assets/react.png';

export default function Portfolio() {
  return (
    <div className="font-sans text-gray-800">
      
      <section className="bg-pink-100 py-10 px-6 text-center">
        <img
          src="/ruta-a-tu-imagen.jpg"
          alt="Perfil"
          className="w-32 h-32 rounded-full mx-auto mb-4"
        />
        <h1 className="text-3xl font-bold">Leidy Yuliana Ramirez</h1>
        <p className="text-lg">Desarrollador Web | Frontend | React</p>
        <p className="mt-2 max-w-xl mx-auto">
          Breve descripción profesional: experiencia, enfoque o intereses.
        </p>
      </section>

 
      <section className="py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
         <img src={html} 
            className="logo w-48 md:w-64" 
            alt="html"></img>
            <p>HTML</p>
          </div>
          <div className="text-center">
            <img src="/icons/css.png" alt="CSS" className="w-12 mx-auto" />
            <p>CSS</p>
          </div>
          <div className="text-center">
            <img src="/icons/js.png" alt="JavaScript" className="w-12 mx-auto" />
            <p>JavaScript</p>
          </div>
          <div className="text-center">
            <img src="{react}" alt="React" className="w-12 mx-auto" />
            <p>React</p>
          </div>
        </div>
      </section>

     
      <section className="bg-pink-100 py-10 px-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white rounded-lg shadow p-4">
          <img src={logosena} 
            className="logo w-48 md:w-64" 
            alt="Logo SENA"></img>
            <h3 className="font-bold text-lg">Proyecto 1</h3>
            <p className="text-sm mb-2">Es un pequeño ejercicio donde se muestra la funcion de un contador </p>
            <a href="https://github.com/Yulianaperdomo/mi-primera-app" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver en GitHub</a>
          </div>
        </div>
      </section>

      
      <footer className="bg-gray-200 text-gray-800 py-6 text-center">
        <p>Yuliana Perdomo</p>
        <p>correo: perdomoy237@gmail.com</p>
        <p>WhatsApp: 3144003113 </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
