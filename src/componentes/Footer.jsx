import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Footer = () => {

  return (
    <footer id="contacto" className="pt-2 bg-blue-500 rounded-lg text-white mb-[-25px]">
        <div className="Redes-sociales mb-[-20px] ml-1 pt-4">
            <a href="https://www.facebook.com/academiamujica/" target="_blank" ><FaFacebook className="mx-4 text-white text-xl hover:text-gray-500"/></a>
            <a href="https://www.instagram.com/mujicaacademia/" className="mx-2" target="_blank"><FaInstagram className="mx-4 text-white text-xl hover:text-gray-500" /></a>
            <a href="mailto:dmendezdemujica@gmail.com" target="_blank" ><IoIosMail className="mx-4 text-white text-xl hover:text-gray-500" /></a>
            <a href="https://www.tiktok.com/@misaelmujica" target="_blank" ><FaTiktok  className="mx-4 text-white text-xl hover:text-gray-500"/></a>
            <a href="https://www.youtube.com/@longyuanchuan/videos" target="_blank" ><FaYoutube className="mx-4 text-white text-xl hover:text-gray-500" /></a>
        </div>
      <div className="p-5 grid grid-cols-2 md:grid-cols-8 gap-8">

        <div className="col-span-2">
          <h2>Contacto:</h2>
          <div className="flex flex-col space-y-4 text-sm">
            <a href="https://wa.me/584242565261" target="_blank" className="text-white">Whatsapp</a>
            <a href="mailto:dmendezdemujica@gmail.com" target="_blank" className="text-white">Correo Electronico</a>
            <a href="https://www.instagram.com/derbakista/" target="_blank" className="text-white">Instagram</a>
            <a href="https://www.facebook.com/academiamujica/" target="_blank" className="text-white">Facebook</a>
          </div>
        </div>
        <div className="col-span-2">
          <h2>Dirección:</h2>
          <div className="flex flex-col space-y-4 text-sm">
            <p>Calle Real de Ruperto Lugo, al lado del Liceo<br/> Nicanor Bolet Peraza, en el Módulo de la Policía, Catia.</p>

          </div>
        </div>

        <div className="col-span-2">
          <h2>Enlaces de interés:</h2>
          <div className="flex flex-col space-y-4 text-sm">
            <a href="https://wa.me/584242565261" className="text-white">Cursos</a>
            <a href="https://wa.me/584242565261" className="text-white">Tienda</a>
            <a href="https://wa.me/584242565261" className="text-white">Clases On-Line</a>
            <a href="https://wa.me/584242565261" className="text-white">Clases Presenciales</a>
          </div>
        </div>
        <div className="col-span-2">
          <h2>Diseño Web:</h2>
          <div className="flex flex-col space-y-4 text-sm">
            <a href="https://wa.me/56981846196" className="text-white">Diseñador</a>
            <a href="https://wa.me/56981846196" className="text-white">Producción audiovisual</a>
            <a href="https://wa.me/56981846196" className="text-white">Desarrollo web</a>
            <a href="https://wa.me/56981846196" className="text-white">Artes Marciales</a>
          </div>
        </div>
        

      </div>
      <p className="text-center bg-slate-500 text-white">Diseñado por Misael Mujica (2024) &#169;</p>
    </footer>
  )
}

export default Footer