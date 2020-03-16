import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'

import {
	Provider
} from 'react-redux'


// (function() {
// 	var styleN = document.createElement("style");
// 	var width = document.documentElement.clientWidth / 16;
// 	styleN.innerHTML = 'html{font-size:' + width + 'px!important}';
// 	document.head.appendChild(styleN);
// })();
// document.height = window.screen.height

var screen = document.documentElement.clientWidth;
var size = screen / 16;
document.documentElement.style.fontSize = size + 'px';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();