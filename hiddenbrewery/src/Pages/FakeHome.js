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
  const [input, setInput] = useState("");

  return (
    <MainWrap>
      <NewsCard className="newsLetter">
        <LabelDiv>need help?</LabelDiv>
        <input
          placeholder="ask us a question"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
      </NewsCard>
      <CompoChoose>
        {" "}
        {(input === "123456" && <Home />) || <FakeCompo />}{" "}
      </CompoChoose>
    </MainWrap>
  );
};

export default FakeHome;
