import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import flash from './flash';
import cursos from './cursos';


const rootReducer = combineReducers({
  routing: routerReducer,
  user,
  flash,
  cursos
});


export default rootReducer;
