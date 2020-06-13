import React from "react";
import { render } from "react-dom";
import "./styles.css";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temp: 50 };
  }

  H20State(temp) {
    if (temp <= 0) {
      return "ice";
    } else if (temp >= 100) {
      return "steam";
    } else return "water";
  }
  render() {
    const { temp } = this.state;
    return (
      <div className="box">
        <div className={this.H20State(temp)}>
          <h1>
            {/* このH20State関数(tempの内容、tempの状態) */}
            Phase: {this.H20State(temp)} {this.props.name}
          </h1>
          <h2>{temp || 0} ℃</h2>
          <button onClick={this.onClickMinus10}>-10</button>
          <button onClick={this.onClickMinus}>-</button>
          <button onClick={this.onClickPlus}>+</button>
          <button onClick={this.onClickPlus10}>+10</button>
          <button onClick={this.onClickReset}>Reset</button>
        </div>
      </div>
    );
  }
  onClickPlus = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 1 });
  };
  onClickPlus10 = () => {
    const { temp } = this.state;
    this.setState({ temp: temp + 10 });
  };
  onClickMinus = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 1 });
  };
  onClickMinus10 = () => {
    const { temp } = this.state;
    this.setState({ temp: temp - 10 });
  };
  onClickReset = () => {
    const { temp } = this.state;
    this.setState({ temp: temp === 0 });
  };
}
render(<H2O name="" />, document.getElementById("root"));
