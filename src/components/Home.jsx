import React from 'react'

const Home = () => {
  return (
    <>
      <Main/>
      <Contact/>
      <Skills/>
    </>
  )
}

const Main = () => {
  return (
    <div className='homeContainer'>
      <div className='homeContainer__cv'>
        <div className='homeContainer__cv__header'>
          <div className='homeContainer__cv__header__photoContainer'>
            <div className='homeContainer__cv__header__photoContainer__photo'>
              <img className='homeContainer__cv__header__photoContainer__photo__prop' src="/src/assets/fotoCV.png" alt="fotoCV" />
            </div>
          </div>
          <div className='homeContainer__cv__header__name'>
            <div className='homeContainer__cv__header__name__prop'>Marcelo Adrián Braganza</div>
          </div>
        </div>
        <div className='homeContainer__cv__body'>
          <h3 className='homeContainer__cv__body__h3'>- Formación -</h3>
          <div className='homeContainer__cv__body__formation'>
            <div className='homeContainer__cv__body__formation__career'>
              <div className='homeContainer__cv__body__formation__career__title'>- Carrera Desarrollo Full Stack</div>
              <div className='homeContainer__cv__body__formation__career__description'>&nbsp;&nbsp;&nbsp;- Coderhouse Buenos Aires</div>
              <div className='homeContainer__cv__body__formation__career__description'>&nbsp;&nbsp;&nbsp;- 02/2023 - 02/2024</div>
            </div>
            <div className='homeContainer__cv__body__formation__career'>
              <div className='homeContainer__cv__body__formation__career__title'>- Carrera de Desarrollo Frontend React - Desarrollo Web</div>
              <div className='homeContainer__cv__body__formation__career__description'>&nbsp;&nbsp;&nbsp;- Coderhouse Buenos Aires</div>
              <div className='homeContainer__cv__body__formation__career__description'>&nbsp;&nbsp;&nbsp;- 02/2023 - 08/2023</div>
            </div>
            <div className='homeContainer__cv__body__formation__career'>
              <div className='homeContainer__cv__body__formation__career__title'>- Programación Backend - Node JS</div>
              <div className='homeContainer__cv__body__formation__career__description'>&nbsp;&nbsp;&nbsp;- Coderhouse Buenos Aires</div>
              <div className='homeContainer__cv__body__formation__career__description'>&nbsp;&nbsp;&nbsp;- 08/2023 - 02/2024</div>
            </div>
            <div className='homeContainer__cv__body__formation__career'>
              <div className='homeContainer__cv__body__formation__career__title'>- Analista Universitario de Sistemas - Informática</div>
              <div className='homeContainer__cv__body__formation__career__description'>&nbsp;&nbsp;&nbsp;- Universidad Siglo XXI - Córdoba</div>
              <div className='homeContainer__cv__body__formation__career__description'>&nbsp;&nbsp;&nbsp;- 03/2015 - 12/2022</div>
            </div>
          </div>
          <h3 className='homeContainer__cv__body__h3'>- Historial laboral -</h3>
          <div className='homeContainer__cv__body__employmentHistory'>
            <div className='homeContainer__cv__body__employmentHistory__item'>- Sin experiencia en el sector empresarial</div>
            <div className='homeContainer__cv__body__employmentHistory__item'>- Preparado para formar parte de un equipo de desarrollo</div>
          </div>
          <h3 className='homeContainer__cv__body__h3'>- Idiomas -</h3>
          <div className='homeContainer__cv__body__languages'>
            <div className='homeContainer__cv__body__languages__item'>- Español: Idioma nativo</div>
            <div className='homeContainer__cv__body__languages__item'>- Inglés: Nivel A2</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <>
      <div className='contactContainer'>
        <div className='contactContainer__title'>CONTACTO</div>
        <div className='contactContainer__logo'>
          <img className='contactContainer__logo__img' src="/src/assets/logoUbi.png" alt="" />
        </div>
        <div className='contactContainer__item'>- Las Heras 758</div>
        <div className='contactContainer__item'>- Coronel Suárez - B7540</div>
        <div className='contactContainer__item'>- Buenos Aires</div>
        <div className='contactContainer__logo'>
          <img className='contactContainer__logo__img' src="/src/assets/logoCel.png" alt="" />
        </div>
        <div className='contactContainer__item'>+5492926459172</div>
        <div className='contactContainer__logo'>
          <img className='contactContainer__logo__img' src="/src/assets/logoEmail.png" alt="" />
        </div>
        <div className='contactContainer__item'>marcelo_braganza@hotmail.com</div>
        <div className='contactContainer__logo'>
          <img className='contactContainer__logo__img' src="/src/assets/logoNac.png" alt="" />
        </div>
        <div className='contactContainer__item'>Argentina</div>
      </div>
    </>
  )
}

const Skills = () => {
  return (
    <>
      <div className='skillsContainer'>
        <div className='skillsContainer__title'>HABILIDADES</div>
        <div className='skillsContainer__item'>- Responsabilidad en el trabajo</div>
        <div className='skillsContainer__item'>- Comunicación</div>
        <div className='skillsContainer__item'>- Flexibilidad y adaptabilidad</div>
        <div className='skillsContainer__item'>- Resolución de problemas</div>
        <div className='skillsContainer__item'>- Proactividad</div>
        <div className='skillsContainer__item'>- Uso de herramientas informáticas</div>
      </div>
    </>
  )
}

export default Home