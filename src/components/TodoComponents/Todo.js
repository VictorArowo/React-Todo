import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div onClick={() => this.props.markCompleted(this.props.item.id)}>
        {this.props.item.name}
      </div>
    );
  }
}

export default Todo;
