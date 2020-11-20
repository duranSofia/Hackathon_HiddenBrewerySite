import FakeCompo from "../components/FakeCompo";
import Home from "./Home";
import React, { useState } from "react";
import {
  CompoChoose,
  LabelDiv,
  MainWrap,
  NewsCard,
} from "../components/styledElements";

const FakeHome = () => {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    return (
    <MainWrap>
        <NewsCard id='newsCard'>
        <LabelDiv>need help?</LabelDiv>
        <input placeholder='username' value={input1} onInput={e => setInput1(e.target.value)}/>
        <input type='password' placeholder='password' value={input2} onInput={e => setInput2(e.target.value)}/>
        </NewsCard>
        {/* <CompoChoose> {input1 === 'freeAlcohol' && input2 === '123456' &&  <Home/> || <FakeCompo/>}  </CompoChoose> */}
  <Home/> 
    </MainWrap>
  );
};

export default FakeHome;
