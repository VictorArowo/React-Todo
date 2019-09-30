import React, { Component } from 'react';

class TodoForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addEvent}>
          <input
            type="text"
            placeholder="Task"
            onChange={this.props.setFormInput}
            value={this.props.formInput}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoForm;
