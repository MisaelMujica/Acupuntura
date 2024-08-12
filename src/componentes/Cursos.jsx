import React from 'react'
import CursosSaludGrid from './CursosSaludGrid'

const Cursos = () => {
  return (

    <div id='cursos' className='pt-20 flex flex-col w-screen justify-center text-center'>
      <div className='text-center flex flex-col'>
          <h2 className='text 3xl'>CURSOS:</h2>
          <p className=' mx-5 text-2xl text-center'>Tenemos disponibles una amplia gama de contenidos que se imparten de manera Regular e intensiva, segun sean tus necesidades.
          </p>
          <div className='img'>
                    <img src='src/assets/cursos2..jpg' className='pb-20'/>
          </div>
      </div>

     <div className='mb-10'>
        <CursosSaludGrid />
     </div>



      <div className='flex-flex-row'>
        <a href="https://wa.me/584242565261" target="_blank" className='bg-blue-600 rounded-lg p-5 text-white font-bold hover:bg-blue-400 shadow-sm cursor-pointer hover:text-gray-100'>INSCRIPCION</a>
      </div>
    </div>

  )
}

export default Cursos