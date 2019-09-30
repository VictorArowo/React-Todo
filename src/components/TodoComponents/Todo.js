import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return <div>{this.props.item.name}</div>;
  }
}

export default Todo;
