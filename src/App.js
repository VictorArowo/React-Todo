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
    const item = this.state.todoData.find(item => item.id === id);
    this.setState(prev => ({
      todoData: [...prev.todoData, (item.completed = true)]
    }));
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
