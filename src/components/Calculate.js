import React, { useState } from "react";
import PriorityQueue from "priorityqueuejs";

const hStyle = { color: "white" };
const Calculate = ({ arr }) => {
  const [show, setshow] = useState(false);
  const [logs, setlogs] = useState([]);
  function lol() {
    let tempu = [];
    var Giver = new PriorityQueue(function (a, b) {
      return a.cash - b.cash;
    });
    var Taker = new PriorityQueue(function (a, b) {
      return a.cash - b.cash;
    });
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += Number(arr[i]);
    }
    sum /= n;
    for (let i = 0; i < n; i++) {
      let h = arr[i] - sum;
      if (h > 0) {
        Taker.enq({
          id: i,
          cash: h,
        });
      } else if (h < 0) {
        Giver.enq({
          id: i,
          cash: -h,
        });
      }
    }

    while (Taker.size() !== 0 && Giver.size() !== 0) {
      let diff = Taker.peek().cash - Giver.peek().cash;
      console.log(Taker.size(), Giver.size());
      let id1 = Taker.peek().id;
      let id2 = Giver.peek().id;
      let val1 = Taker.peek().cash;
      let val2 = Giver.peek().cash;
      Giver.deq();
      Taker.deq();

      if (diff < 0) {
        Giver.enq({
          id: id2,
          cash: -diff,
        });
        id2 += 1;
        id1 += 1;
        let temp = "Person " + id2 + "--> Person " + id1 + " : " + val1;
        tempu.push(temp);
      } else if (diff > 0) {
        Taker.enq({
          id: id1,
          cash: diff,
        });
        id2 += 1;
        id1 += 1;
        let temp = "Person " + id2 + "--> Person " + id1 + " : " + val2;
        tempu.push(temp);
      } else {
        id2 += 1;
        id1 += 1;
        let temp = "Person " + id2 + "--> Person " + id1 + " : " + val1;
        tempu.push(temp);
      }
      if (Taker.size() === 0) {
        console.log("hi");
        break;
      }
    }
    setlogs(tempu);
    console.log(show);
    setshow(true);
    console.log(logs);
  }

  return (
    <div>
      <button
        style={hStyle}
        placeholder="Calculate"
        className="calculate--btn"
        onClick={() => {
          lol();
        }}
      >
        Calculate
      </button>
      <div
        className="show-cont"
        style={show === true ? { display: "block" } : { display: "none" }}
      >
        <div>
          <ul className="person--list">
            {logs.map((ele) => (
              <li className="item-list">{ele}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
