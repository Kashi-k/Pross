import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.handleincrement = this.handleincrement.bind(this);
    this.handledecrement = this.handledecrement.bind(this);
    this.handlereset = this.handlereset.bind(this);
  }
  state = {
    counter: 0,
  };
  showZero() {
    return this.state.counter === 0 ? "zero" : this.state.counter;
  }
  showColor() {
    return this.state.counter === 0 ? "bg-warning" : "bg-success";
  }
  handleincrement()
  {
    this.setState({counter:this.state.counter+1});
  }
  handledecrement() 
  {
    this.setState({counter:this.state.counter-1});
  }
  handlereset() 
  {
    this.setState({
      counter: 0,
    });
  }
  render() 
  {
    return (
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div>
          <h1 className="bg-primary">
            <h1 className={this.showColor()}>{this.showZero()}</h1>
          </h1>
            <button
              className=" btn btn-outline-success me-2"
              onClick={this.handleincrement}
            >
              +
            </button>
            <button
              className="btn btn-outline-info me-2"
              onClick={this.handledecrement}
            >
              -
            </button>
            <button
              className="btn btn-outline-warning"
              onClick={this.handlereset}
            >
              Reset
            </button>
          </div>
        </div>
    );
  }
}