import React from "react";
import deskImage from "./Images/officeDesk.jpg";

function Headerimage() {
  //TODO: styling for multiple screens
  return (
    <img
      className="headertop"
      style={{ width: "100vw" }}
      src={deskImage}
      alt="desk top with computer and coffee cup"
    />
  );
}

export default Headerimage;
