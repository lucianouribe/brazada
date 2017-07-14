import React from 'react';
import { connect } from 'react-redux';
import HorarioCell from './HorarioCell';
import { fetchHorarios} from '../actions/horarios';
import { aemer, sortNumber, ortografica } from '../helpers';


class MainHorarioCel extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      calendar: 's_gimnasio'
    }

    this.shouldGoCell = this.shouldGoCell.bind(this);
    this.calendarSetter = this.calendarSetter.bind(this);
    this.horarioNavBar = this.horarioNavBar.bind(this);

  }

  componentDidMount(){
    $('select').material_select();

    this.props.dispatch(fetchHorarios());

    const slider = document.querySelector('.nav-bar-main');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;  // stop the fn from running
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });

    //la palanca
    const scrollerer = document.querySelector('.nav-bar-controller');
    let howMany = document.querySelector('.btn-nav-main');

    function handleUpdate() {
      slider.scrollLeft = parseInt(this.value) * 2;
    }

    scrollerer.addEventListener('change', handleUpdate);
    scrollerer.addEventListener('mousemove', handleUpdate);

  }

  calendarSetter(cual){
    // let cual = this.refs.cualCalendario.value;
    if(cual === 'descargar horarios') {
      window.location.href = "/pdfs/brazada-horarios-y-tarifas-2017.pdf"
    } else {
      this.setState({calendar: cual});
    }
  }


  shouldGoCell(cualDia){

    let horarios = this.props.horarios;
    let horariosXDia = horarios.filter( object => { if(object.calendario === this.state.calendar && object.dia === cualDia) return object; })


    if(horariosXDia.length){
      return (
        <div className='horario-block'>
          <h3>{cualDia}</h3>
          {horariosXDia.map( evento => {
            return(<HorarioCell key={evento.id} horario={evento}/>)
          })}
        </div>
      )
    }

  }

  horarioNavBar(){
    let s_gimnasio = 's_gimnasio';
    let s_tono = 's_tono';
    let s_mente = 's_mente';
    let s_espera = 's_espera';
    let hidro = 'hidro';
    let hidroEsp = 'hidro especial';
    let entrenamiento = 'entrenamiento';
    let clases = 'clases natacion';
    let descargar = 'descargar horarios';
    return(
      <div>
        <div className='main-nav'>
          <div className='btn-prev'></div>
          <div className='nav-bar-main'>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(s_gimnasio)}><span>gimnasio</span></div>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(s_tono)}><span>salón tono</span></div>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(s_mente)}><span>salón mente</span></div>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(s_espera)}><span>salón espera</span></div>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(hidro)}><span>hidro</span></div>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(hidroEsp)}><span>hidro especial</span></div>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(entrenamiento)}><span>entrenamiento natación</span></div>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(clases)}><span>clases natación</span></div>
            <div className="btn-nav-main" onClick={() => this.calendarSetter(descargar)}><span>descargar horarios</span></div>
          </div>
          <div className='btn-next'></div>
        </div>
        <div className="palanca">
          <form action="#">
            <p className="range-field">
              <input className="nav-bar-controller" type="range" id="spacing" min="0" max="350"  />
            </p>
          </form>
        </div>
      </div>
    )
  }


  render(){
    let lunes = 'lunes';
    let martes = 'martes';
    let miercoles = 'miercoles';
    let jueves = 'jueves';
    let viernes = 'viernes';
    let sabado = 'sabado';
    let domingo = 'domingo';

    return(
      <div className='horarios-container horarios-client'>
        <div className="horario-header">
          {this.horarioNavBar()}
          <div className="horario-header-titulo">
            <h2>Calendario: <strong>{ortografica(this.state.calendar)}</strong></h2>
          </div>
          <div className='main-info main-horarios'>
            {this.shouldGoCell(lunes)}
            {this.shouldGoCell(martes)}
            {this.shouldGoCell(miercoles)}
            {this.shouldGoCell(jueves)}
            {this.shouldGoCell(viernes)}
            {this.shouldGoCell(sabado)}
            {this.shouldGoCell(domingo)}
          </div>
        </div>
      </div>
    );


  }

}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    cursos: state.cursos,
    profesors: state.profesors,
    horarios: state.horarios,
    misvis: state.misvis
  }
}

export default connect(mapStateToProps)(MainHorarioCel);
