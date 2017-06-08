import React from 'react';
import { connect } from 'react-redux';
import Horario from './Horario';
import { fetchHorarios} from '../actions/horarios';
import { aemer } from '../helpers';


class MainHorario extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      calendar: 'tierra'
    }

    this.shouldGo = this.shouldGo.bind(this);
    this.calendarSetter = this.calendarSetter.bind(this);
  }

  componentDidMount(){
    $('select').material_select();

    this.props.dispatch(fetchHorarios());
  }

  calendarSetter(){
    let cual = this.refs.cualCalendario.value;
    this.setState({calendar: cual});
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
      <div className="horario-header">
        <form className="horario-options">
          <div className="selecter">
            <select className="browser-default" ref="cualCalendario">
              <option>escoge calendario</option>
              <option>tierra</option>
              <option>hidro</option>
              <option>hidro_especial</option>
              <option>entrenamiento</option>
              <option>clases natacion</option>
            </select>
          </div>
          <div onClick={this.calendarSetter} className="calendar-submit"><span>Go</span></div>
        </form>
        <div className="horario-header-titulo">
          <h2>Calendario: <strong>{this.state.calendar}</strong></h2>
        </div>
      </div>
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
          <tbody>
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

export default connect(mapStateToProps)(MainHorario);
