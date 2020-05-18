import {combineReducers} from 'redux';
import {cities} from './cities';
import {city} from './city';


//combinereducers es una funcion que espera un objeto
export default combineReducers({
    cities,
    city
})