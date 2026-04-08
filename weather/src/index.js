import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { Chart } from './components/Chart';
import Header from './components/Header';
import { Dashboard } from './components/Dashboard';
import { WeatherCards } from './components/Weather-cards';
import { WeatherDetails } from './components/Weather-details';
import { Forcast } from './components/Forcast';
import { Pets } from './components/Pets';
import { Nature } from './components/Nature';
import { Footer } from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Dashboard/>
    <WeatherCards/>
    <WeatherDetails/>
    <Chart/>
    <Forcast/>
    <Pets/>
    <Nature/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
