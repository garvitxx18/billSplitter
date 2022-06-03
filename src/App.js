import React from "react";
import Card from "./components/Card";
import { useState } from "react";
import Calculate from "./components/Calculate";
import imgLogo from "./assets/Logo6.png";
import imgNav from "./assets/navbar.png";

function App({ num }) {
  let temp = [];
  for (let i = 0; i < num; i++) {
    temp.push(0);
  }
  const [arrTotal, setarrTotal] = useState(temp);
  console.log(arrTotal);
  return (
    <div>
      <div className="top">
        <img src={imgNav} className="navImg" alt="shit" />
        <img src={imgLogo} className="billImg" alt="shit" />
      </div>
      <div className="stack">
        <div className="container">
          {arrTotal.map((ele, ind) => (
            <Card arrtotal={arrTotal} index={ind} setarrTotal={setarrTotal} />
          ))}
        </div>

        <Calculate arr={arrTotal} />
      </div>
    </div>
  );
}

export default App;
