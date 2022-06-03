import React from "react";
import imgPerson from "../assets/person.png";

const Name = ({ index }) => {
  let pholder = String("Person ") + String(1 + Number(index));
  return (
    <div className="nameOut">
      <img src={imgPerson} className="firstImg" alt="shit" height={60} />
      <input type="text" placeholder={pholder} className="name-input" />
    </div>
  );
};

export default Name;
