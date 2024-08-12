import React from 'react'

const Consultorio = () => {
  return (

    <div id='consultorio' className='flex flex-col justify-center items-center pt-20'>
      <h2 className='text-center'>CONSULTORIO:</h2>
      <img src='src/assets/consultorio.svg' className='w-[350px]' />
      <p className='max-w-[900px] mx-5 font-semibold text-2xl text-center'>Además de ofrecer cursos formativos también ofrecemos consultas de diversas técnicas terapéuticas, entre las que destacan: <strong>Acupuntura, Auriculoterápia, Homeopatía, Magnetoterápia, Masajes, Drenage Linfático, Reflexología Podal, Moxibustión, Bambú terapia, Biomagnetismo, Kinesiotaping, Flores de Bach</strong>, entre otras. </p>
      
      <div className='flex flex-col justify-center items-center text-center md:flex-row mx-5 lg:mx-40 max-w-[900px]'>
        <img src='src/assets/jornadas.svg' className='md:w-96' />
        <div className='mt-7 flex-col pl-3'>
          <h2 className='text-center'>JORNADAS DE ACUPUNTURA SOLIDARIA:</h2>
          <p className='text-md  text-center '>Nuestro lema como Academia Mujica es la EXCELENCIA EN LA FORMACIÓN DE TERAPEUTAS, debido a tres factores fundamentales: la experiencia pedagógica de los docentes, la didáctica específica de las clases, y la práctica constante de la acupuntura a través de las jornadas gratuitas. En este último aspecto se desarrollan dos elementos claves: el primero, impartir salud a todo aquel que lo necesite, comenzando por los ancianos; y el segundo, propiciar la destreza necesaria para nuestros alumnos, ya que tenemos la firme convicción de que la práctica hace al maestro. Estas jornadas se realizan regularmente con la participación de los estudiantes y los pacientes que han tenido ya la experiencia de nuestras terapias y que, gracias a la comunicación y recomendaciones, han aumentado significativamente, aportando ánimo para continuar con tan encomiable labor. Las jornadas son totalmente gratuitas, pero se aceptan colaboraciones, con lo cual nos ha permitido sostener o mantener el espacio.</p>
        </div>
      </div>
      <a href="https://wa.me/584242565261" target="_blank" className=' mt-8 bg-blue-600 rounded-lg p-5 text-white font-bold hover:bg-blue-400 shadow-sm cursor-pointer hover:text-gray-100'>MAS INFORMACION</a>

    </div>
  )
}

export default Consultorio