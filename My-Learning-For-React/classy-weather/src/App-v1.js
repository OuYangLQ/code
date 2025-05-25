import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 5 };
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIecrement = this.handleIecrement.bind(this);
  }

  handleDecrement() {
    // console.log(this);
    this.setState((curState) => {
      return { count: curState.count - 1 };
    });
  }

  handleIecrement() {
    // console.log(this);
    this.setState((curState) => {
      return { count: curState.count + 1 };
    });
  }

  render() {
    const date = new Date("june 21 2027");
    date.setDate(date.getDate() + this.state.count);
    return (
      <div>
        <button onClick={this.handleDecrement}>-</button>
        <span>
          {date.toDateString()}[{this.state.count}]
        </span>
        <button onClick={this.handleIecrement}>+</button>
      </div>
    );
  }
}

export default Counter;
