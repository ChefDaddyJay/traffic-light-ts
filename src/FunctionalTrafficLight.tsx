import { useState } from "react";

export const FunctionalTrafficLight = () => {
  const [activeLight, setActiveLight] = useState(0);
  const nextLight = () => {
    setActiveLight(activeLight < 2 ? activeLight + 1 : 0);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${activeLight === 2 ? "red" : "black"}`}></div>
        <div
          className={`circle ${activeLight === 1 ? "yellow" : "black"}`}
        ></div>
        <div
          className={`circle ${activeLight === 0 ? "green" : "black"}`}
        ></div>
      </div>
      <button className="next-state-button" onClick={nextLight}>
        Next State
      </button>
    </div>
  );
};
