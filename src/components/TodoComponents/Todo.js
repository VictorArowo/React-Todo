import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border-bottom: 1px solid grey;
  margin-bottom: 10px;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

class Todo extends Component {
  render() {
    return this.props.item.completed ? (
      <Div style={{ textDecoration: 'line-through' }}>
        {this.props.item.name}
      </Div>
    ) : (
      <Div onClick={() => this.props.markCompleted(this.props.item.id)}>
        {this.props.item.name}
      </Div>
    );
  }
}

export default Todo;
