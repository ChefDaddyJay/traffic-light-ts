import { Component } from "react";

export class ClassTrafficLight extends Component {
  state = {
    activeLight: 0,
  };
  nextLight = () => {
    this.setState({
      activeLight: this.state.activeLight < 2 ? this.state.activeLight + 1 : 0,
    });
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${
              this.state.activeLight === 2 ? "red" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.activeLight === 1 ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.activeLight === 0 ? "green" : "black"
            }`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.nextLight}>
          Next State
        </button>
      </div>
    );
  }
}
