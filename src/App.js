import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import uuid from 'uuid';
import styled from 'styled-components';

const Div = styled.div`
  width: 98vw;
  height: 97.6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .text {
    font-size: 50px;
    font-weight: bold;
  }

  button {
    border: none;
    width: 200px;
    height: 30px;
    border-radius: 2px;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export default class App extends React.Component {
  state = {
    todoData: [],
    formInput: ''
  };

  setFormInput = e => {
    this.setState({
      formInput: e.target.value
    });
  };

  componentDidUpdate() {
    localStorage.setItem('Todos', JSON.stringify(this.state.todoData));
  }

  componentDidMount() {
    let todoItems = JSON.parse(localStorage.getItem('Todos'));
    this.setState({
      todoData: todoItems
    });
  }

  addEvent = e => {
    e.preventDefault();
    if (this.state.formInput)
      this.setState(prev => ({
        todoData: [
          ...prev.todoData,
          { name: prev.formInput, completed: false, id: uuid() }
        ],
        formInput: ''
      }));
  };

  markCompleted = id => {
    const index = this.state.todoData.findIndex(index => index.id === id);
    const updatedTodo = { ...this.state.todoData[index], completed: true };
    const updatedState = [
      ...this.state.todoData.slice(0, index),
      updatedTodo,
      ...this.state.todoData.slice(index + 1)
    ];

    this.setState({
      todoData: [...updatedState]
    });
  };

  clearCompleted = () => {
    this.setState(prev => ({
      todoData: [...prev.todoData.filter(item => item.completed === false)]
    }));
  };

  render() {
    return (
      <Div>
        {this.state.todoData.length === 0 ? (
          <div class="text">You have nothing to do, Scrub</div>
        ) : (
          <TodoList
            todoData={this.state.todoData}
            markCompleted={this.markCompleted}
          />
        )}
        <TodoForm
          addEvent={this.addEvent}
          formInput={this.state.formInput}
          setFormInput={this.setFormInput}
        />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </Div>
    );
  }
}
