import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Routes, Route, Navigate, Outlet
} from 'react-router-dom'

import './index.css';

import {ReactComponent as Navbar} from './assets/Navbar.svg';
import App from './components/App';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FAQs from './components/FAQs';

ReactDOM.render(
  <React.StrictMode>
    <div className="main-container">
      <App />
      <About />
      <Roadmap />
      <Team />
      <FAQs />
      <Navbar />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
