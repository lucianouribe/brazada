import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render(){
    return (
      <div>
        <div className="portada">
          <h4 id="main-phrase" className="center-align">Cuerpo sano, mente sana y sentirse como en casa</h4>
          <div className="logo"></div>
          <h6 className="center-align">Institución de educación para el trabajo y desarrollo humano</h6>
          <Link className="btn btn-portada" to='/contacto'>contáctanos</Link>
        </div>
        <footer className="footer row">
          <a className="redSocial redSocial1 foot-stuff" href="https://www.facebook.com/Brazada-Centro-Deportivo/" target="blank"></a>
          <a className="redSocial redSocial2 foot-stuff" href="https://www.instagram.com/lucianouribe/" target="blank"></a>
          <p className="foot-text foot-stuff">Calle 18 sur Nº 24 - 44 El Poblado, San Lucas. Tel: 317 14 59, 317 10 91</p>
        </footer>
        <div className="experiencias">
          <blockquote>
            <b>Certificados por la secretaría de educación de Medellín </b>
            <em>- resolución No: 23456</em>
          </blockquote>
        </div>
        <div className='portada-tres row'>
          <div className="col s12 m12 l4 programas">
            <div className='icon-natacion-p icon-portada'></div>
            <h4>Natacion</h4>
            <p>La natacion es una bacaneria, porque si no se aprende en brazada, se ahoga en una charqueria.</p>
          </div>
          <div className="col s12 m12 l4 programas">
            <div className='icon-gimnasio-p icon-portada'></div>
            <h4>Gimnasia</h4>
            <p>La gimnasia es una maravilla, porque al que mucha hace, el gordo humilla.</p>
          </div>
          <div className="col s12 m12 l4 programas">
            <div className='icon-hidro-p icon-portada'></div>
            <h4>Hidro</h4>
            <p>La hidro gimnasia es lo mas especial, para despues de una accidente, los huesos soldar como si fuera con coaxial.</p>
          </div>
        </div>
        <div className='portada-cuatro'>
          <Link className="btn btn-portada" to='/contacto'>contáctanos</Link>
        </div>
        <div className='portada-cinco'></div>
        <div className="experiencias">
          <blockquote>
            <b>“La mejor decision que he tomado en mi vida.
            Es la academia perfecta para que mi hija aprenda a nadar”</b>
            <em>- Manuela Uribe</em>
          </blockquote>
        </div>
        <div className='portada-tres row'>
          <div className="col s12 m12 l12 programas center">
            <div className='icon-mente-p icon-portada'></div>
            <h4>Mente y Cuerpo</h4>
            <p>y bla bla bla bla bla  hidro gimnasia es lo mas especial, para despues de una accidente, los huesos soldar como si fuera con coaxial</p>
          </div>
        </div>
        <div className='portada-siete'></div>
        <div className="experiencias">
          <blockquote>
            <b>“Me fascina ir porque los mejores profesores estan alla” </b>
            <em>- Marcela comeo</em>
          </blockquote>
        </div>
        <div className='portada-seis'>
        </div>
      </div>
    )
  }
}

export default Home;
