import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/** 
  1.Dependencies
     npm i redux

  2.Creating a store
    Takes Two Arguments
     1. Argument is the reducer you want to use,
     2. Argument is the state. (No Longer needed sense we are now using initialState)

  3.Creating a reducer
    Takes Two Arguments
     1. Argument is the state.
     2. Argument is the action.

  4.Creating a action
    Takes Two Arguments
     1. Argument is the type. 
        ex: type:'ADD'
     2. Argument is the payload. 
        ex: payload: '1'
*/

// Basic store
import { createStore } from 'redux'

const initialState = {
    result: '',
    lastValues: []
}

const reducer = (state = initialState, action) => {
  //1.Determine what action
  switch(action.type){
    case 'ADD':
        state = {
            ...state,
            result: state.result + action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
      break;
    case 'SUBTRACT':
        state = {
            ...state,
            result: state.result - action.payload,
            lastValues: [...state.lastValues, action.payload]
        };
      break;
  }
  return state; // New state the application will use
}

const store = createStore(reducer); // Took away second parameter because the initialState will already be passed

console.log("Initial Store:", store.getState())

store.subscribe(() => { // Subscribe will check if the store has been updated.
    console.log("Store Updated", store.getState())
}); 


//Dispatches expect a javascript Object
store.dispatch({
  type:"ADD",
  payload: 5
})

store.dispatch({
    type:"SUBTRACT",
    payload: 5
  })


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
