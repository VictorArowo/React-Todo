import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todoData.map(item => (
          <Todo item={item} />
        ))}
      </div>
    );
  }
}

export default TodoList;
