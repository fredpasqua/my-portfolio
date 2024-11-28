import "./Tabs.css";
import React from "react";

function Tabs({ handleClick }) {
  return (
    <ul className="objectSelectorList">
      <li className="text">
        <button onMouseOver={() => handleClick(1)} className="selectorButton">
          Proj.
        </button>
      </li>{" "}
      <li className="text">
        <button onMouseOver={() => handleClick(2)} class="selectorButton">
          Notes
        </button>
      </li>{" "}
      <li className="text">
        <button onMouseOver={() => handleClick(3)} class="selectorButton">
          Tech
        </button>
      </li>{" "}
    </ul>
  );
}

export default Tabs;
