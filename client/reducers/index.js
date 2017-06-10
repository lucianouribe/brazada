import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';
import cursos from './cursos';
import contactos from './contactos';
import alumnos from './alumnos';
import tarifas from './tarifas';
import profesors from './profesors';
import horarios from './horarios';
import misvis from './misvis';
import menus from './menus';
import submenus from './submenus';


const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  flash,
  cursos,
  contactos,
  alumnos,
  tarifas,
  profesors,
  horarios,
  misvis,
  menus,
  submenus
});


export default rootReducer;
