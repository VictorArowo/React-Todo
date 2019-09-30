import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todoData.map(item => (
          <Todo
            key={item.id}
            item={item}
            markCompleted={this.props.markCompleted}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
