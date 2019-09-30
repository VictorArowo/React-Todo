import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return this.props.item.completed ? (
      <div style={{ textDecoration: 'line-through' }}>
        {this.props.item.name}
      </div>
    ) : (
      <div onClick={() => this.props.markCompleted(this.props.item.id)}>
        {this.props.item.name}
      </div>
    );
  }
}

export default Todo;
