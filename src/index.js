import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyHello from "./chap03/MyHello";
import EventBasic from "./chap03/EventBasic";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <p>現在時刻:{(new Date()).toLocaleString()}</p>
    <MyHello myName="Taro" />
    <EventBasic type={'time'} />
    <EventBasic type={'date'} />
    <EventBasic type={'other'} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
