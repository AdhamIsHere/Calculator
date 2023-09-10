import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Screen.css";

class Screen extends Component {
  render() {
    return <div className="screen">{this.props.display}</div>;
  }
}

export default Screen;
