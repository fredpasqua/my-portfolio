import "./Tabs.css";
import React from "react";

function Tabs() {
  return (
    <ul className="objectSelectorList">
      <li className="text">
        <button className="selectorButton">Proj.</button>
      </li>{" "}
      <li className="text">
        <button class="selectorButton">Tech.</button>
      </li>{" "}
      <li className="text">
        <button class="selectorButton">Notes</button>
      </li>{" "}
    </ul>
  );
}

export default Tabs;
