import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ForList from "./chap03/ForList";
import books from "./chap03/books";
import ForFilter from "./chap03/ForFilter";
import ForSort from "./chap03/ForSort";
import SelectStyle from "./chap03/SelectStyle";
import StyledPanel from "./chap03/StyledPanel";
import MyHello from "./chap03/MyHello";
import EventBasic from "./chap03/EventBasic";
import StateBasic from "./chap03/StateBasic";
import TitledPanel from "./chap03/TitledPanel";
import ListTemplate from "./chap03/ListTemplate";
import Download from "./chap03/Download";
import StateParent from "./chap03/StateParent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      {/*<App/>*/}
      <p>現在時刻:{(new Date()).toLocaleString()}</p>
      <MyHello myName="Taro"/>
      {/*<MyHello />*/}
      <EventBasic type={'time'}/>
      <StateBasic init={0}/>
      <ForList src={books}/>
      <ForFilter books={books}/>
      <ForSort books={books}/>
      <SelectStyle mode="light"/>
      <SelectStyle mode="dark"/>
      <StyledPanel>
        <p key="title">メンバー募集中</p>
        <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
      </StyledPanel>
      <TitledPanel>
        <p key="title">メンバー募集中</p>
        <p key="body">ようこそ、WINGSプロジェクトへ！！</p>
      </TitledPanel>
      <ListTemplate src={books}>
        {elem => (
            <>
              <dt>
                <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                  {elem.title} ({elem.price})
                </a>
              </dt>
              <dd>{elem.summary} {elem.download ? <Download isbn={elem.isbn}/>
                  : null} </dd>
            </>

        )}
      </ListTemplate>
      <StateParent/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
