import React from 'react';
import { connect } from 'react-redux';
import Horario from './Horario';
import { fetchHorarios, addHorario } from '../actions/horarios';
import { aemer, ortografica } from '../helpers';


class Horarios extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      calendar: 's_gimnasio',
      modulus: false,
      tempEvent: '',
      day: '',
      hour: ''
    }

    this.dater = this.dater.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.shouldGo = this.shouldGo.bind(this);
    this.showModulus = this.showModulus.bind(this);
    this.displayHeader = this.displayHeader.bind(this);
    this.calendarSetter = this.calendarSetter.bind(this);
  }

  componentDidMount(){
    $('select').material_select();

    this.props.dispatch(fetchHorarios());
  }

  toggleDisplay() {
    this.setState({modulus: !this.state.modulus})
  }

  dater(e, position, day, hour){
    e.preventDefault()
    this.setState({
      modulus: !this.state.modulus,
      tempEvent: position,
      day: day,
      hour: hour
    })
    // console.log(hour)
  }

  handleSubmit(e){
    e.preventDefault();
    // console.log('handle sumbit')
    let curso_id = this.refs.cursos.value;
    let profesor_id = this.refs.profesor.value;
    let dia = this.state.day;
    let hora = this.state.hour;
    let minutos = this.refs.minutos.value;
    let posicion = this.state.tempEvent;
    let calendario = this.state.calendar;
    let duracion = this.refs.duracion.value;

    this.props.dispatch(addHorario(curso_id, profesor_id, dia, hora, minutos, posicion, calendario, duracion))
    this.toggleDisplay();
    this.setState({
      tempEvent: '',
      day: '',
      hour: ''
    })
  }

  showModulus(){
    if(this.state.modulus) {
      let cursos = this.props.cursos;
      let profesors = this.props.profesors;
      return(
        <form className='modulus-container'>
          <div className='ingresa-curso' onClick={this.handleSubmit}>
            <span>Ingresa Curso</span>
          </div>
          <div className='inputer-curso'>
            <div className='selecter'>
              <select className="browser-default" ref="cursos">
                <option value="bebes">Curso</option>
                {Object.keys(cursos).map(key => <option key={key} value={cursos[key].id}>{cursos[key].nombre}</option>)}
              </select>
            </div>
            <div className='selecter'>
              <select className="browser-default" ref="profesor">
                <option value="pepita">Profesor</option>
                {Object.keys(profesors).map(key => <option key={key} value={profesors[key].id}>{profesors[key].nombre} {profesors[key].apellido}</option>)}
              </select>
            </div>
            <p className="esta-hora">{this.state.hour}:</p>
            <div className='selecter'>
              <select className="browser-default" ref="minutos">
                <option value="00">minutos</option>
                <option>00</option>
                <option>10</option>
                <option>30</option>
                <option>45</option>
              </select>
            </div>
            <div className='selecter'>
              <select className="browser-default" ref="duracion">
                <option value="60">duracion</option>
                <option>10</option>
                <option>30</option>
                <option>45</option>
                <option>60</option>
              </select>
            </div>
            <span onClick={this.toggleDisplay}><i className="material-icons">cancel</i></span>
          </div>
        </form>
      )
    }
  }

  displayHeader() {
    if(this.state.modulus){
      return (
        this.showModulus()
      )
    } else {
      return (this.theHeader())
    }
  }

  calendarSetter(){

    let cual = this.refs.cualCalendario.value;
    this.setState({calendar: cual});
  }

  theHeader(){
    return(
      <div className="horario-header">
        <form className="horario-options">
          <div className="selecter">
            <select className="browser-default" ref="cualCalendario">
              <option>escoge horario</option>
              <option value='s_gimnasio'>gimnasio</option>
              <option value='s_tono'>salón tono</option>
              <option value='s_mente'>salón mente y cuerpo</option>
              <option value='s_espera'>salón espera</option>
              <option value='hidro'>hidro</option>
              <option value='especial'>hidro_especial</option>
              <option value='entrenamiento'>entrenamiento natación</option>
              <option value='natacion'>clases natación</option>
            </select>
          </div>
          <div onClick={this.calendarSetter} className="calendar-submit"><span>Go</span></div>
        </form>
        <div className="horario-header-titulo">
          <h2>Horario: <strong>{ortografica(this.state.calendar)}</strong></h2>
        </div>
      </div>
    )
  }


  shouldGo(where){
    // where es la posicion que viene del evento
    let horarios = this.props.horarios;
    //loopear filtro para poner solo los que cumplen un tipo de calendario especifico
    let horariosXCalendario = horarios.filter( object => { if(object.calendario === this.state.calendar) return object; })
    //loopear filtro para poner solo los que cumplen con una posicion especifica
    let esteEvento = horariosXCalendario.filter((evento, index, self) => self.findIndex((ev) => {return ev.posicion === where }) === index);
    // loopear todos los horarios
    if(esteEvento){
      return esteEvento.map( tested => {
        return(<Horario key={tested.id} horario={tested}/>)
      })
    }

  }

  theSchedule(time){
    return (
      <tr>
        <td>
          <strong className="horas">{aemer(time)}</strong>
        </td>
        <td className={`l-${time}`} onClick={(e)=>this.dater(e, `l-${time}`, 'lunes', time)}>{this.shouldGo(`l-${time}`)}</td>
        <td className={`m-${time}`} onClick={(e)=>this.dater(e, `m-${time}`, 'martes', time)}>{this.shouldGo(`m-${time}`)}</td>
        <td className={`w-${time}`} onClick={(e)=>this.dater(e, `w-${time}`, 'miercoles', time)}>{this.shouldGo(`w-${time}`)}</td>
        <td className={`j-${time}`} onClick={(e)=>this.dater(e, `j-${time}`, 'jueves', time)}>{this.shouldGo(`j-${time}`)}</td>
        <td className={`v-${time}`} onClick={(e)=>this.dater(e, `v-${time}`, 'viernes', time)}>{this.shouldGo(`v-${time}`)}</td>
        <td className={`s-${time}`} onClick={(e)=>this.dater(e, `s-${time}`, 'sabado', time)}>{this.shouldGo(`s-${time}`)}</td>
        <td className={`d-${time}`} onClick={(e)=>this.dater(e, `d-${time}`, 'domingo', time)}>{this.shouldGo(`d-${time}`)}</td>
      </tr>
    )
  }

  render(){
    let seis = '06';
    let siete = '07';
    let ocho = '08';
    let nueve = '09';
    let diez = '10';
    let once = '11';
    let doce = '12';
    let trece = '13';
    let catorce = '14';
    let quince = '15';
    let dieciseis = '16';
    let diecisiete = '17';
    let dieciocho = '18';
    let diecinueve = '19';
    let veinte = '20';
    let ventiuno = '21';
    let ventidos = '22';
    return(
      <div className='horarios-container'>
        {this.displayHeader()}
        <table>
          <thead>
            <tr>
              <th scope="col">Hora</th>
              <th scope="col">Lunes</th>
              <th scope="col">Martes</th>
              <th scope="col">Miercoles</th>
              <th scope="col">Jueves</th>
              <th scope="col">Viernes</th>
              <th scope="col">Sabado</th>
              <th scope="col">Domingo</th>
            </tr>
          </thead>
          <colgroup>
            <col/>
            <col className="gricecito" />
            <col/>
            <col className="gricecito" />
            <col/>
            <col className="gricecito" />
            <col/>
            <col className="gricecito" />
          </colgroup>
          <tbody className='horarios-body'>
            {this.theSchedule(seis)}
            {this.theSchedule(siete)}
            {this.theSchedule(ocho)}
            {this.theSchedule(nueve)}
            {this.theSchedule(diez)}
            {this.theSchedule(once)}
            {this.theSchedule(doce)}
            {this.theSchedule(trece)}
            {this.theSchedule(catorce)}
            {this.theSchedule(quince)}
            {this.theSchedule(dieciseis)}
            {this.theSchedule(diecisiete)}
            {this.theSchedule(dieciocho)}
            {this.theSchedule(diecinueve)}
            {this.theSchedule(veinte)}
            {this.theSchedule(ventiuno)}
            {this.theSchedule(ventidos)}

          </tbody>

        </table>
      </div>
    );


  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cursos: state.cursos,
    profesors: state.profesors,
    horarios: state.horarios
  }
}

export default connect(mapStateToProps)(Horarios);
