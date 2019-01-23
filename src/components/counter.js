import React, { Component } from 'react';

class Counter extends Component {
  constructor () {
    super();
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this);
    this.dicrease = this.dicrease.bind(this);

  }
  increase () {
    this.setState({count: 1 + this.state.count})
  }
  dicrease () {
    this.setState({count: this.state.count === 0? this.state.count: --this.state.count })
  }
  render () {
    return (
        <div>
          <button onClick={this.increase}>Increase</button>
          {this.state.count}
          <button onClick={this.dicrease}>Dicrease</button>
        </div>
      )
  }
}

export default Counter;