import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

import {
	Provider
} from 'react-redux'
var screen = document.documentElement.clientWidth;
var size = screen / 16;
document.documentElement.style.fontSize = size + 'px';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();