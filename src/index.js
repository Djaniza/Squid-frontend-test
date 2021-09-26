import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../src/Styles/App.scss';

if (typeof window !== 'undefined') {
  require('@squidit/css/dist/js/squid.min.js')
}

ReactDOM.render(<App />, document.getElementById('root'));

reportWebVitals();
