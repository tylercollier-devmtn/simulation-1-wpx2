import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter as HR } from 'react-router-dom';

ReactDOM.render(<HR><App /></HR>, document.getElementById('root'));
registerServiceWorker();
