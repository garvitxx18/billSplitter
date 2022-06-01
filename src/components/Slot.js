import React, { useState } from "react";
import imgminus from "../assets/minus.png";

const Slot = ({ arr, setarr, total }) => {
  function descChange(index, e) {
    const temp = [...arr];
    temp[index].desc = e;
    setarr(temp);
  }
  function priceChange(index, e) {
    const temp2 = [...arr];
    temp2[index].price = e;
    setarr(temp2);
    total(temp2);
  }
  function deleteSlot(index) {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (i !== index) {
        temp = [...temp, arr[i]];
      }
    }
    setarr(temp);
    total(temp);
  }
  return (
    <div>
      {arr.map((ele, index) => (
        <div className="slot">
          <div className="purchase-slot">
            <h3 className="purchase-tag">Purchase</h3>
            <input
              onChange={(e) => {
                descChange(index, e.target.value);
              }}
              type="text"
              placeholder=""
              className="purchase-input"
              value={ele.desc}
            />
          </div>
          <div className="price-slot">
            <h3 className="price-tag">Price</h3>
            <input
              onChange={(e) => {
                priceChange(index, e.target.value);
              }}
              type="number"
              placeholder=""
              className="price-input"
              value={ele.price}
            />
          </div>
          <div className="button-slot">
            <button className="minus-button">
              <img
                src={imgminus}
                className="minus-image"
                alt="papu"
                onClick={() => deleteSlot(index)}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slot;
