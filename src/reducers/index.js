import { combineReducers } from 'redux';
import WeatheReducer from './reducer_weather'

const rootReducer = combineReducers({
  weather: WeatheReducer
});

export default rootReducer;
