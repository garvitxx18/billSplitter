import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import App from "../App";
import imgLogo from "../assets/Logo7.png";

const Home = () => {
  let hStyle = { color: "white" };
  const [num, setnum] = useState(2);
  function add() {
    setnum(num + 1);
  }
  function minus() {
    if (num > 2) {
      setnum(num - 1);
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="outerMain">
              <div>
                <img src={imgLogo} className="homeLogo" alt="shit" />
                <div className="paraOne">
                  <p style={hStyle}>
                    Very often on holiday, at partys, for presents or in
                    free-time everyone pays something for a group of people.
                    Calculating the payments afterwards to even out the group
                    can be a daunting and complicated task (even with a
                    calculator) - especially when some expenses are not shared
                    with all group members.
                  </p>
                  <p style={hStyle}>
                    billzer.com helps you with that: After you entered
                    everyone's name and the spendings she or he had for the
                    group, the billzer calculator tells you who owes whom how
                    much and how to settle debts in the group.
                  </p>
                  <p style={hStyle}>
                    It is also possible for expenses not be shared with the
                    whole group and only among specific people.
                  </p>
                </div>
              </div>
              <div className="rightSide">
                <div className="homeMain">
                  <div className="p2Box">
                    <h2 className="formHead">
                      How Many people are in your group!
                    </h2>
                  </div>

                  <div className="numDiv">
                    <p className="nTotal">{num}</p>
                  </div>

                  <div className="pmMain">
                    <button className="minusHome" onClick={minus}>
                      <p className="error">-</p>
                    </button>
                    <button className="addHome" onClick={add}>
                      +
                    </button>
                  </div>
                  <Link to="/about">
                    <button className="calcBtn" type="button" style={hStyle}>
                      Go!
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/about" element={<App num={num} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Home;
