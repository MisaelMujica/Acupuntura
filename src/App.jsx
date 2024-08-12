import React from 'react';
import Navbar from './componentes/Navbar';
import Hero from './componentes/Hero';
import Cursos from './componentes/Cursos';
import Consultorio from './componentes/Consultorio';
import Acerca from './componentes/Acerca';
import Footer from './componentes/Footer';

function App() {

  return (
    <div >
      <Navbar />
      <Hero />
      <Cursos />
      <Consultorio />
      <Acerca />
      <Footer />
    </div>
  )
}

export default App
