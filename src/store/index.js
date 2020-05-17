//redux
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {city} from './../reducers/city.js'

const initialState = {
    city: 'Ciudad de Mexico'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store  = createStore(city,initialState ,composeEnhancers(applyMiddleware(thunk)));
