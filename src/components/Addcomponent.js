import React, { Component } from "react";

const buttonStyle = {
  padding: "20 30",
  backgroundColor: "#fff",
  color: "#60b246",
  border: "1px solid #d4d5d9"
};

class Addcomponent extends Component {
  state = {
    isAdd: false,
    count: 0
  };
  handleAdd = e => {
    this.setState({
      isAdd: true,
      count: 1
    });
  };
  handleDec = e => {
    if (this.state.count <= 1) {
      this.setState({
        isAdd: false,
        count: this.state.count
      });
    }
    this.setState({
      count: this.state.count - 1
    });
  };
  handleInc = e => {
    this.setState({
      count: this.state.count + 1
    });
  };
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count <= 0) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    const { isAdd, count } = this.state;
    return (
      <div>
        {isAdd ? (
          <div>
            <button style={buttonStyle} onClick={this.handleInc}>
              +
            </button>
            {count}
            <button style={buttonStyle} onClick={this.handleDec}>
              -
            </button>
          </div>
        ) : (
          <button style={buttonStyle} onClick={this.handleAdd}>
            ADD
          </button>
        )}
      </div>
    );
  }
}
export default Addcomponent;
