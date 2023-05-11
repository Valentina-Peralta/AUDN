import React, { useState, useEffect } from "react";
import "../Cupid/CupidStyle.css";
import { NavLink } from "react-router-dom";

function Cupid() {
  const [animationValue, setAnimationValue] = useState(false);
  const [startAnimation1, setStartAnimation1] = useState("");
  const [startAnimation2, setStartAnimation2] = useState("");
  function prueba() {
    setAnimationValue(!animationValue);
    if (animationValue === true) {
      setStartAnimation1("animacionImg2");
    }
  }

  function Like() {
    setAnimationValue(!animationValue);
    if (animationValue === true) {
      setStartAnimation2("Like");
      prueba();
    }
  }

  function Dislike() {
    setAnimationValue(!animationValue);
    if (animationValue === true) {
      setStartAnimation2("Dislike");
      prueba();
    }
  }

  return (
    <div className="cupidContainer">
      <div className="cupidTitle">
        <NavLink to="/home">
          <img src="src\Img\position=left-1.svg" alt="backArrow" />
        </NavLink>
        <h3 className="musicalCupid">Cupido Musical</h3>
      </div>
      <div className={`cupidImg animacionImg1${startAnimation2}`}>
        <img src="" alt="" />
      </div>
      <div className={`cupidImg2 ${startAnimation1}`}></div>
      <div className="matchBtns">
        <button className="heart" onClick={Like}></button>
        <button className="cross" onClick={Dislike}></button>
      </div>
      <h2 className="artistName">Cantante</h2>
      <button className="disabled">Crear Playlist</button>
    </div>
  );
}

export default Cupid;
