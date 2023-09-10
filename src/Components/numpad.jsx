import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./NumPad.css"; // Import the custom CSS file
import Screen from "./screen";

class NumPad extends Component {
  state = { eq: "" };

  handleClick = (x) => {
    let newEq = this.state.eq;
    this.setState({ eq: newEq + x });
  };

  handleBackSpace = () => {
    let neweq = this.state.eq;
    if (neweq.length > 0) {
      neweq = neweq.slice(0, -1);
      this.setState({ eq: neweq });
    }
  };

  handleClear = () => {
    let neweq = "";
    this.setState({ eq: neweq });
  };

  handleCalc = () => {
    let neweq = this.state.eq;
    let ans = "";
    try {
      ans = eval(neweq).toString();
    } catch (e) {
      ans = "Check Equation Syntax";
    } finally {
      this.setState({ eq: ans });
    }
  };

  render() {
    return (
      <div className="center">
        <div className="text-center custom-back">
          <div className="screen-container">
            <Screen display={this.state.eq} />
          </div>
          <div>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("1")}
            >
              1
            </button>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("2")}
            >
              2
            </button>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("3")}
            >
              3
            </button>
            <button
              className="btn btn-danger equal-width-buttons m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClear()}
            >
              C
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("4")}
            >
              4
            </button>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("5")}
            >
              5
            </button>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("6")}
            >
              6
            </button>
            <button
              className="btn btn-outline-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("+")}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("7")}
            >
              7
            </button>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("8")}
            >
              8
            </button>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("9")}
            >
              9
            </button>
            <button
              className="btn btn-outline-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("-")}
            >
              -
            </button>
          </div>
          <div>
            <button
              className="btn btn-outline-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("*")}
            >
              *
            </button>
            <button
              className="btn btn-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("0")}
            >
              0
            </button>
            <button
              className="btn btn-outline-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("/")}
            >
              /
            </button>
            <button
              className="btn custom-padding btn-outline-primary m-2 btn-lg equal-width-buttons text-center"
              onClick={() => this.handleClick("**")}
            >
              Pow
            </button>
          </div>
          <div>
            <button
              className="btn btn-outline-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick(".")}
            >
              {"."}
            </button>
            <button
              className="btn btn-outline-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick("(")}
            >
              {"("}
            </button>

            <button
              className="btn btn-outline-primary m-2 btn-lg equal-width-buttons"
              onClick={() => this.handleClick(")")}
            >
              {")"}
            </button>
            <button
              className="btn btn-outline-danger equal-width-buttons m-2 btn-lg "
              onClick={this.handleBackSpace}
            >
              <i className="bi bi-backspace"></i>
            </button>
          </div>
          <div>
            <button
              className="btn btn-success m-2 btn-lg custom-width"
              onClick={this.handleCalc}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NumPad;
