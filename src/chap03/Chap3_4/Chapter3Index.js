import MyHello from "../MyHello";
import EventBasic from "../EventBasic";
import StateBasic from "../StateBasic";
import ForList from "../ForList";
import books from "../books";
import ForFilter from "../ForFilter";
import ForSort from "../ForSort";
import SelectStyle from "../SelectStyle";
import StyledPanel from "../StyledPanel";
import TitledPanel from "../TitledPanel";
import ListTemplate from "../ListTemplate";
import Download from "../Download";
import StateParent from "../StateParent";
import EventMouse from "./EventMouse";
import EventCompare from "./EventCompaare";
import EventError from "./EventError";
import EventObj from "./EventObj";
import EventArgs from "./EventArgs";
import React from "react";

export default function Chapter3Index() {
  return (
      <>
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
        <p/>
        <EventMouse
            alt="ロゴ画像"
            beforeSrc="https://www.web-deli.com/image/linkbanner_l.gif"
            afterSrc="https://www.web-deli.com/image/home_chara.gif"/>
        <EventCompare/>
        <EventError src="./image/dl.png" alt="test"/>
        <EventError src="./image/dummy.png" alt="test"/>
        <EventObj/>
        <EventArgs/>
      </>
  )
}
