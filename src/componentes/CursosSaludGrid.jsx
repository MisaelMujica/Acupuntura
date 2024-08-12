import React from 'react';

const CursosSaludGrid = () => {
    return (
        <div className='justify-center text-center items-center'>
            <div className=''>
                <div>
                    <h2>SALUD:</h2>
                    <p  className='text-2xl'>En el área de salud ofrecemos diplomados 	en:</p>
                </div>
            </div>

            <div className='card-container '>
                <div className='cursoCard'>
                    <p className='font-bold text-lg'>ACUPUNTURA CONTEMPORÁNEA</p>
                    <p className='font-bold'>Presencial</p>
                    <p>Conocerás las últimas técnicas y sistemas de acupuntura, convirtiéndote en experto en ésta novedosa y efectiva área catalogada como la medicina del futuro.</p>
                    <p className='md:text-sm'>Duración aproximada: dieciocho (18) meses. <br/>
                        Clases un sábado al mes.<br/>
                        Pasantías durante todas las semanas.<br/>
                        Experiencia de docente.<br/>
                        Asesoría y acompañamiento del proceso práctico.<br/>
                        Aval del Instituto Nacional de Seguridad Social (INASS).
                    </p>
                </div>

                <div className='cursoCard'>
                    <p className='font-bold text-lg'>ACUPUNTURA CONTEMPORÁNEA</p>
                    <p className='font-bold'>On-line</p>
                    <p className=''>Duración aproximada 9 meses. <br/>
                        Clases una hora cada quince (15) días, o dos (2) clases al mes.<br/>
                        Asesoría y acompañamiento del proceso práctico a partir de vídeos y fotos de la experiencia.
                    </p>
                    <p className='md:text-sm'><strong>DIPLOMADOS INTENSIVOS:</strong> con el fin de facilitar la adquisición de los conocimientos en los diversos diplomados que se ofrece, hemos creado estos cursos intensivos, cuya duración se reduce a la mitad del tiempo previsto en los cursos regulares. Se informará sobre esta oferta oportunamente.</p>
                </div>
                
            

                <div className='cursoCard '>
                    <p className='font-bold text-lg'>ACUPUNTURA TUNG</p>
                    <p>Conviértete en experto en esta maravillosa técnica desarrollada por varias generaciones de la familia china Tung: un grupo de excelentes punturas que permitirán, con pocas agujas y de manera distal o contralateral, enfrentar cualquier disfunción o enfermedad con mucho éxito por su sencillez y probada efectividad. <br/></p>
                    <p>Duración aproximada: un (1) año. <br/>
                    Prelación: acupuntura contemporánea.</p>
                </div>

                <div  className='cursoCard '>
                    <p className='font-bold text-lg'>TERAPIAS MANUALES Y FLORALES</p>
                    <p>Desarrollarás todas tus potencialidades manuales con este Diplomado porque adquirirás valiosas herramientas terapéuticas, tales como: Reflexología manual y podal, masaje japonés Shiatsu, flores de Bach, Mediterráneas, entre otros cursos excelentes para brindar salud con tus manos y flores, equilibrando las emociones de tus pacientes.</p>
                </div>

                <div className='cursoCard '>
                    <p className='font-bold text-lg'>HOMEOPATIA</p>
                    <p >Con este diplomado tendrás un valioso recurso terapéutico porque la homeopatía se centra de forma personalizada en cada paciente para diversos problemas de salud con pequeñas dosis de glóbulos o gotas  impregnadas de la energía necesaria para curar. La homeopatía puede usarse con otros tratamientos y no tiene efectos secundarios relevantes ni generan adicción, por lo cual es utilizada por un gran número de terapeutas a nivel mundial. Duración aproximada de seis meses.</p>
                </div>
            </div>
        </div>
    )
}

export default CursosSaludGrid