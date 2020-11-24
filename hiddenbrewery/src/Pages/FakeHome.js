import React from "react";
import FakeCompo from "../components/FakeCompo";
import Header from "../components/Header";

const FakeHome = () => {
  return (
    <>
      <Header />
      <div style={{ position: "relative", left: "47%", top: "17px" }}>
        <button
          style={{
            zIndex: 9999,
            position: "fixed",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            height: "25px",
            width: "60px",
          }}
          onClick={() => {
            listen();
          }}
        >
          help?
        </button>
      </div>
      <FakeCompo />
    </>
  );
};

export default FakeHome;
