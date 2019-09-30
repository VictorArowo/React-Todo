import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import uuid from 'uuid';

class App extends React.Component {
  state = {
    todoData: [],
    formInput: ''
  };

  setFormInput = e => {
    this.setState({
      formInput: e.target.value
    });
  };

  addEvent = e => {
    e.preventDefault();
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

  render() {
    return (
      <>
        {this.state.todoData.length === 0 ? (
          <div>'No data'</div>
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
      </>
    );
  }
}

export default App;
