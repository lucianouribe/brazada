import React from 'react';
import { Link } from 'react-router';


class Ubicacion extends React.Component {

  render(){
    return(
      <div className='ubicacion-container'>
        <div className='ubicacion-titulo'>
          <h1 className='main-titulo'>Cómo llegar</h1>
        </div>
        <div className="ubicacion-info">
          <div className='ubicacion-iframe'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.309480905249!2d-75.56397420650006!3d6.181725582240036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7bd3b983995f5a49!2sCentro+Deportivo+Brazadas!5e0!3m2!1sen!2sco!4v1496939009387"  allowFullScreen></iframe>
          </div>
          <div className='ubicacion-escrita'>
            <div className='ubicacion-datos'>
              <h5>Dirección</h5>
              <p>Calle 18sur #24-44, San Lucas. Poblado. Medellín.</p>
              <p>Antiguo Pablo Restrepo</p>
              <p>(+4) 317 1731</p>
              <p>brazada12@gmail.com <Link to='/contacto'><i className="icon-contacto icon"></i></Link></p>
            </div>
            <div className='ubicacion-buses'>
              <h5>Buses</h5>
              <p>Comercial hotelera</p>
              <p>San Lucas 135, 136</p>
              <p><strong>Desde Metro Aguacatala</strong></p>
              <p>135i</p>
              <p><strong>Desde Metro Ayurá, Metro Envigado</strong></p>
              <p>Ruta 1, San Lucas</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default Ubicacion;
