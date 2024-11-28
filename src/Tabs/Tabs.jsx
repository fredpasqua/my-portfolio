import "./Tabs.css";
import React from "react";

function Tabs() {
  return (
    <ul className="objectSelectorList">
      <li className="text">
        <button className="selectorButton">Projects </button>
      </li>{" "}
      <li className="text">
        <button class="selectorButton">Technology</button>
      </li>{" "}
      <li className="text">
        <button class="selectorButton">Notes</button>
      </li>{" "}
    </ul>
  );
}

export default Tabs;
