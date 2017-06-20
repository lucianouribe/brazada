import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render(){
    return (
      <div>
        <div className="portada">
          <h4 id="main-phrase" className="center-align">Esta es una frase muy, pero muy, pero muy inspiradora! En serio. Me derretí!!!</h4>
          <div className="logo"></div>
          <Link className="btn btn-portada" to='/contacto'>contáctanos</Link>
        </div>
        <footer className="footer row">
          <a className="redSocial redSocial1" href="https://www.facebook.com/lucianouribe/" target="blank"></a>
          <a className="redSocial redSocial2" href="https://www.instagram.com/lucianouribe/" target="blank"></a>
          <p className="right-align foot-text">Calle 18sur #24-44, San Lucas. Antiguo Pablo Restrepo</p>
        </footer>
        <div className="portada-dos">
          <blockquote>
            <b>“La mejor decision que he tomado en mi vida.
            Es la academia perfecta para que mi hija aprenda a nadar” </b>
            <em>- Manuela Uribe</em>
          </blockquote>
        </div>
        <div className='portada-tres row'>
          <div className="col s12 m12 l4 programas">
            <div className='icon-natacion-p icon-portada'></div>
            <h4>Natacion</h4>
            <p>La natacion es una bacaneria, porque si no se aprende en brazada, se ahoga en una charqueria</p>
          </div>
          <div className="col s12 m12 l4 programas">
            <div className='gimnasio-p icon-portada'></div>
            <h4>Gimnacia</h4>
            <p>La gimnacia es una maravilla, porque al que mucha hace, el gordo humilla</p>
          </div>
          <div className="col s12 m12 l4 programas">
            <div className='hidro-p icon-portada'></div>
            <h4>Hidro</h4>
            <p>La hidro gimnacia es lo mas especial, para despues de una accidente, los huesos soldar como si fuera con coaxial</p>
          </div>
        </div>
        <div className='portada-cuatro'>
          <Link className="btn btn-portada" to='/contacto'>contáctanos</Link>
        </div>
        <div className='portada-cinco'>
          <p>Hola</p>
        </div>

      </div>
    )
  }
}

export default Home;
