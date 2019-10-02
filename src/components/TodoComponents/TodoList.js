import React, { Component } from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Div = styled.div`
  max-height: 150px;
  width: 600px;
  padding: 20px;
  border-radius: 10px;
  background: white;
  overflow: auto;
  font-size: 40px;

  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: #09C16C;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

class TodoList extends Component {
  render() {
    return (
      <Div>
        {this.props.todoData.map(item => (
          <Todo
            key={item.id}
            item={item}
            markCompleted={this.props.markCompleted}
          />
        ))}
      </Div>
    );
  }
}

export default TodoList;
