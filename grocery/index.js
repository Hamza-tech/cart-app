import React from 'react';
import ReactDom from 'react-dom';

import App from './src/App';
import './style.css'

import {createStore} from "redux";
import {Provider} from 'react-redux'
import cartReducer from './reducers/cart-reducer'

 


// const store = createStore(cartReducer)

ReactDOM.render(
   
        <App />,
 
    document.getElementById("root")
)