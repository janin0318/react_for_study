import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ForList from "./chap03/ForList";
import books from "./chap03/books";
import ForFilter from "./chap03/ForFilter";
import ForSort from "./chap03/ForSort";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/*<App/>*/}
      {/*<p>現在時刻:{(new Date()).toLocaleString()}</p>*/}
      {/*<MyHello myName="Taro"/>*/}
      {/*<EventBasic type={'time'}/>*/}
      {/*<StateBasic init={0}/>*/}
      {/*<ForList src={books}/>*/}
      {/*<ForFilter books={books}/>*/}
      <ForSort books={books}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
