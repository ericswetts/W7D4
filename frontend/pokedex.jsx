import React from 'react'
import ReactDOM from 'react-dom';
import {RECEIVE_ALL_POKEMON,receiveAllPokemon,requestAllPokemon} from './actions/pokemon_actions';
import * as APIUtil from './util/api_util'
import configureStore from './store/store'
import { createStore } from 'redux';



document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    window.fetchAllPokemon = APIUtil.fetchAllPokemon
    window.getState = store.getState
    window.dispatch = store.dispatch
    window.requestAllPokemon = requestAllPokemon
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});
