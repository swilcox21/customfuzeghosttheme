import React, { useState, useEffect } from "react";

export const PingID = () => {
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState(0);

  useEffect(() => {
    if (animation == 0) {
      setTimeout(() => {
        setAnimation(animation + 1);
      }, 1000);
    }
    if (animation == 1) {
      setTimeout(() => {
        setAnimation(animation + 1);
      }, 1000);
    }
    if (animation == 2) {
      setTimeout(() => {
        setAnimation(animation + 1);
      }, 1000);
    } else if (animation >= 3) {
      setAnimation(0);
    }
  });

  return (
    <>
      <div class="pingidContainer">
        <div class="pingidTest">THIS IS MY PING ID TEST COMPONENT</div>
        <br />
        <div class="spinner-container">
          {/* <img class="spinner-start" src="https://github.com/swilcox21/images/blob/main/Screen%20Shot%202022-09-06%20at%207.57.38%20PM.png?raw=true" alt="" />
                    <img class="spinner-middle" src="https://github.com/swilcox21/images/blob/main/Screen%20Shot%202022-09-06%20at%207.58.13%20PM.png?raw=true" alt="" />
                    <img class="spinner-end" src="https://github.com/swilcox21/images/blob/main/Screen%20Shot%202022-09-06%20at%207.58.32%20PM.png?raw=true" alt="" /> */}
          {animation == 0 ? (
            <img
              class="spinner-start"
              src="https://github.com/swilcox21/images/blob/main/kartwheel-start.png?raw=true"
              alt=""
            />
          ) : animation == 1 ? (
            <img
              class="spinner-middle"
              src="https://github.com/swilcox21/images/blob/main/kartwheel-middle.png?raw=true"
              alt=""
            />
          ) : animation == 2 ? (
            <img
              class="spinner-end"
              src="https://github.com/swilcox21/images/blob/main/kartwheel-end.png?raw=true"
              alt=""
            />
          ) : (
            <img
              class="spinner-start"
              src="https://github.com/swilcox21/images/blob/main/kartwheel-start.png?raw=true"
              alt=""
            />
          )}
        </div>
        <small class="pingidTest">
          test out the counter to make sure react is working...
        </small>
        <br />
        <br />
        <button onClick={() => setCount(count + 1)}>
          <i class="fa fa-angle-up" aria-hidden="true"></i>
        </button>
        <br />
        <br />
        <div>{count}</div>
        <br />
        <button onClick={() => setCount(count - 1)}>
          <i class="fa fa-angle-down" aria-hidden="true"></i>
        </button>
      </div>
      <div class="pingidFooter">HI BILL FOOTER</div>
    </>
  );
};
