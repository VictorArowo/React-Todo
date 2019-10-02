import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .input {
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
  }

  .button {
    border: none;
    width: 80px;
    height: 30px;
    border-radius: 2px;
    font-size: 20px;
    font-weight: bold;

    &:hover {
      opacity: 0.8;
    }
  }
`;

class TodoForm extends Component {
  render() {
    return (
      <Div>
        <form onSubmit={this.props.addEvent}>
          <input
            type="text"
            placeholder="Task"
            className="input"
            onChange={this.props.setFormInput}
            value={this.props.formInput}
          />
          <br />
          <input type="submit" className="button" value="Add" />
        </form>
      </Div>
    );
  }
}

export default TodoForm;
