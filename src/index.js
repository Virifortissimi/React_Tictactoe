import React from 'react';
import './index.css';
import './main.css';
import App from './App';
import {render} from 'react-dom';
import Game from './game';
import * as serviceWorker from './serviceWorker';



render(<Game />, document.getElementById('root') );
  
// render(<App name="Gabriel" />, document.getElementById('root'));
// render(<Square />, document.getElementById('game'));
// render(<StorePicker />, document.getElementById('store'));
// render(<Element />, document.getElementById('element'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
