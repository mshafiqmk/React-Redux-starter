import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

const changeState = 'changeState';
const oneMoreActionConst = 'oneMoreAction';
const action = {
    type: changeState,
    payload: {
        newState: 'updated state'
    }
}
const oneMoreAction = {
    type: oneMoreActionConst,
    payload: {
        newState: 'one more state update'
    }
}
let store = createStore(reducer);

function reducer(state, action) {
    switch (action.type) {
        case changeState:
            return action.payload.newState;
        case oneMoreActionConst:
            return action.payload.newState;

        default:
            return "state";
    }
}

console.log(store.getState());
store.dispatch(action);
console.log(store.getState());
store.dispatch(oneMoreAction);
console.log(store.getState());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
