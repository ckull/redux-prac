import React from "react";
import { connect } from "react-redux";

class Counter extends React.Component {
  // state = { count: 0 };

  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: `RESET` });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
        <br />
        <button onClick={this.reset}>0</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  arr: state.arr
});

export default connect(mapStateToProps)(Counter);
