import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import * as atatus from 'atatus-spa';

try {
  atatus.config(process.env.NEXT_PUBLIC_ATATUS_API_KEY).install();
} catch (error) {
  console.error("Atatus failed to initialize:", error);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//atatus.notify(new Error('Test Atatus Setup'));
