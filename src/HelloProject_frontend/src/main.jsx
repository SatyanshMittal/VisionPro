import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import '../public/fonts/Rajdhani-Medium.ttf'
import Navbar from '../components/navbar'
import './aboutUs.scss';
import './features.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <App />
  </React.StrictMode>,
);
