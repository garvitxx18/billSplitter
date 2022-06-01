import React from "react";
import imgPerson from "../assets/person.png";
// const hStyle = { color: "white" };

const Name = () => {
  return (
    <div className="nameOut">
      <img src={imgPerson} className="firstImg" alt="shit" height={60} />
      <input type="text" placeholder="Person 1" className="name-input" />
      {/* <img src={imgRupese} className="rupeseImg" alt="shit" height="50" /> */}
      {/* <p className="priceTag"> {total}/-</p> */}
    </div>
  );
};

export default Name;
