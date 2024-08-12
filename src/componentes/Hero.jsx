import React from 'react'

const Hero = () => {
  return (
    <div id='inicio' className='flex flex-center flex-col w-screen h-auto mt-16 text-center justify-center items-center'>
      <h1>ACADEMIA MUJICA</h1>
      <img src='src/assets/logo.svg' className='w-96 cursor-pointer pb-4' />
      <div>
        <p  className='max-w-[900px] mx-5 font-semibold text-2xl'>Academia dedicada a la formación educativa en el ámbito de la salud holística, con cursos presenciales y On-line.<br/>
Descubre nuestras ofertas y estudia con nosotros. Academia Mujica, excelencia en la formación integral.
</p>
      </div>
    </div>
  )
}

export default Hero