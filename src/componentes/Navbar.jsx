import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { MdLocalGroceryStore } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

import { useState } from 'react';

const Navbar = () => {

  const [desplegar, setdesplegar] = useState(false)
  
  return (
    <div>
      <div className='bg-blue-700 h-10 hidden sm:flex flex-row justify-between w-screen fixed top-0 pb-8 pt-3 z-50'>
        <div className='float-left pl-16 text-white'>
          <img src='src/assets/logo.svg' className='w-28' />
        </div>
        <div className='flex flex-row pr-16'>
          <ul className='list-none flex flex-row gap-5 text-white font-bold'>
            <li><a href='#inicio' className='navboton text-white'>Inicio</a></li>
            <li><a href='#cursos' className='navboton text-white'>Cursos</a></li>
            <li><a href='#consultorio' className='navboton text-white'>Consultorio</a></li>
            <li><a href='#informacion' className='navboton text-white'>Informacion</a></li>
            <li><a href='#contacto' className='navboton text-white'>Contacto</a></li>
          </ul>
        </div>
      </div>


      <button onClick={()=> setdesplegar((prev)=> !prev)}>
        <TiThMenu className='fixed top-0 left-0 h-16 w-16 m-0 flex sm:hidden bg-blue-700 text-white shadow-lg text-center z-10 rounded-lg' />
      </button>


      <div className={`${desplegar ? 'flex' : 'hidden'} flex sm:hidden fixed top-[65px] left-0 h-auto w-16 m-0 flex-col bg-blue-700 text-white shadow-lg text-center rounded-lg z-40`}>
        <div className='group'>
          <a href='#inicio'><FaHome className='sidebar-icon' /></a>
          <span className='tooltip group-hover:scale-100 group-hover:flex mt-[-52px]'>Inicio</span>
        </div>
        <div className='group'>
          <a href='#cursos'><FaGraduationCap className='sidebar-icon' /></a>
          <span className='tooltip group-hover:scale-100 group-hover:flex mt-[-52px]'>Cursos</span>
        </div>
        <div className='group'>
          <a href='#tienda'><MdLocalGroceryStore className='sidebar-icon' /></a>
          <span className='tooltip group-hover:scale-100 group-hover:flex mt-[-52px]'>Tienda</span>
        </div>
        <div className='group'>
          <a href='#informacion'><FaInfo className='sidebar-icon' /></a>
          <span className='tooltip group-hover:scale-100 group-hover:flex mt-[-52px]'>Informacion</span>
        </div>
        <div className='group'>
          <a href='#contacto'><IoMdContact className='sidebar-icon' /></a>
          <span className='tooltip group-hover:scale-100 group-hover:flex mt-[-52px]'>Contacto</span>
        </div>
      </div>





      <div className='fixed bottom-4 right-4  rounded-lg hover:cursor-pointer z-20'>
        <a href="https://wa.me/584242565261" target="_blank"><RiWhatsappFill className='text-4xl text-green-500 hover:text-green-400' /></a>

      </div>
    </div>
  )
}

export default Navbar