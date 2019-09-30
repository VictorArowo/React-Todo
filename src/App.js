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

  input {
    width: 250px;
    height: 40px;
    font-weight: 20px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding: 5px 20px;
    transition: box-shadow 0.3s;
    &:focus {
      box-shadow: 0 3px 6px 0 white;
    }
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
    formInput: '',
    searchTerm: '',
    searchResults: []
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
    if (todoItems) {
      this.setState({
        todoData: todoItems,
        searchResults: todoItems
      });
    } else {
      this.setState({
        todoData: [],
        searchResults: []
      });
    }
  }

  searchChange = event => {
    this.setState({
      searchTerm: event.target.value
    });
    this.setState(prev => ({
      searchResults: prev.todoData.filter(item =>
        item.name.includes(prev.searchTerm)
      )
    }));
  };

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
    this.setState(prev => ({
      searchResults: prev.todoData
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
    this.setState(prev => ({
      searchResults: prev.todoData.filter(item =>
        item.name.includes(prev.searchTerm)
      )
    }));
  };

  clearCompleted = () => {
    this.setState(prev => ({
      todoData: [...prev.todoData.filter(item => item.completed === false)]
    }));
    this.setState(prev => ({
      searchResults: prev.todoData.filter(item =>
        item.name.includes(prev.searchTerm)
      )
    }));
  };

  render() {
    return (
      <Div>
        <input
          type="text"
          placeholder="Search.."
          onChange={this.searchChange}
          value={this.state.searchTerm}
        />
        {!this.state.searchResults ? (
          <div className="text">You have nothing to do, Scrub</div>
        ) : (
          <TodoList
            todoData={this.state.searchResults}
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
