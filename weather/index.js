import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Chart } from './src/Chart';
import Header from './src/Header';
import { Dashboard } from './src/Dashboard';
import { WeatherCards } from './src/Weather-cards';
import { WeatherDetails } from './src/Weather-details';
import { Forcast } from './src/Forcast';
import { Pets } from './src/Pets';
import { Nature } from './src/Nature';
import { Footer } from './src/Footer';

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
reportWebVitals();
