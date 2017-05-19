import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';
import cursos from './cursos';
import contactos from './contactos';


const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  flash,
  cursos,
  contactos
});


export default rootReducer;
