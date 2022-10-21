import React, { Component } from "react";
import "./about.css";
class Test extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2676&q=80)`,
      height: "50vh",
      fontSize: "80px",
      color: "white",
      backgroundSize: "100%",
      opacity: ".5",
      backgroundRepeat: "no-repeat",
    };
    return <div style={myStyle}></div>;
  }
}

export default Test;
