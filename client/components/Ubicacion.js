import React from 'react';


class Ubicacion extends React.Component {

  render(){
    return(
      <div className='ubicacion-container'>
        <div className='ubicacion-titulo'>
          <h1 className='main-titulo'>Como Llegar</h1>
        </div>
        <div className="ubicacion-info">
          <div className='ubicacion-iframe'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.309480905249!2d-75.56397420650006!3d6.181725582240036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7bd3b983995f5a49!2sCentro+Deportivo+Brazadas!5e0!3m2!1sen!2sco!4v1496939009387"  allowFullScreen></iframe>
          </div>
          <div className='ubicacion-escrita'>
            <div className='ubicacion-buses'>
              <h5>Buses</h5>
              <p>Comercial hotelera</p>
              <p>101</p>
              <p>200</p>
            </div>
            <div className='ubicacion-datos'>
              <h5>Dirección</h5>
              <p>calle 18sur #24-44</p>
              <p>Medellín</p>
              <p>Antiguo Pablo Restrepo</p>
              <p>3171099</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

}


export default Ubicacion;
