import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from './Store';
import { positions ,transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

const options ={
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE, 
  
  
}

root.render(
  <Provider store={store}>
  <AlertProvider template={AlertTemplate} {...options}>
  <App />
  </AlertProvider>
</Provider>
);

reportWebVitals();
