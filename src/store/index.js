//redux
import {createStore} from 'redux';
import {city} from './../reducers/city.js'

const initialState = {
    city: 'Ciudad de Mexico'
};


export const store  = createStore(city,initialState ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
