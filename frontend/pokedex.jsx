import React from 'react'
import ReactDOM from 'react-dom';
import {RECEIVE_ALL_POKEMON,receiveAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util'
import configureStore from './store/store'
import { createStore } from 'redux';

const store = configureStore()
window.fetchAllPokemon = fetchAllPokemon;
window.receiveAllPokemon = receiveAllPokemon
window.getState = store.getState
window.dispatch = store.dispatch


document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    ReactDOM.render(<h1>Pokedex</h1>, rootEl);
});