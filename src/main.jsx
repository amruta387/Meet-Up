import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import * as atatus from 'atatus-spa';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

//atatus.config('2725307772844e41a0b3fabbee1cffa4').install();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
serviceWorkerRegistration.register();
//atatus.notify(new Error('Test Atatus Setup'));