import React from "react";
import Name from "./Name";
import Slot from "./Slot";
import { useState } from "react";

const hStyle = { color: "white" };
const Card = ({ arrtotal, index, setarrTotal }) => {
  const [arr, setArr] = useState([]);
  function increase() {
    setArr([...arr, { desc: "", price: 0 }]);
  }
  function changeTotal(arr2) {
    let sum = 0;
    for (let i = 0; i < arr2.length; i++) {
      sum += Number(arr2[i].price);
    }
    const temp = [...arrtotal];
    temp[index] = Number(sum);
    setarrTotal(temp);
  }

  return (
    <div className="mainCard">
      <Name index={index} />
      <Slot arr={arr} setarr={setArr} total={changeTotal} />
      <div className="add-button-slot">
        <button style={hStyle} onClick={increase} className="add-button">
          Add Item
        </button>
      </div>
      <p className="total-fig">₹{arrtotal[index]}</p>
    </div>
  );
};

export default Card;
