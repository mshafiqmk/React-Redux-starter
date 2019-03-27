import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux';


function productReducer(state = [], { type, payload }) {
    switch (type) {
        case 'updateProduct':
            return payload;
        default:
            return state;
    }
}

function userReducer(state = [], { type, payload }) {
    switch (type) {
        case 'addUser':
            return payload;
        default:
            return state;
    }
}

const allReducers = combineReducers({ products: productReducer, users: userReducer })

let store = createStore(allReducers);

console.log(store.getState());

const addUserAction = {
    type: 'addUser',
    payload: {
        userid: 1,
        userName: 'shafiq'
    }
}
const updateProductAction = {
    type: 'updateProduct',
    payload: {
        id: 1,
        name: 'Laptop',
        quantity: 122,
        brand: 'lenovo'
    }
}
store.dispatch(addUserAction);
console.log(store.getState());


store.dispatch(updateProductAction);
console.log(store.getState());



ReactDOM.render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
