import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

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
        { name: prev.formInput, completed: false, id: 123 }
      ],
      formInput: ''
    }));
  };

  render() {
    return (
      <>
        {this.state.todoData.length === 0 ? (
          <div>'No data'</div>
        ) : (
          <TodoList todoData={this.state.todoData} />
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
