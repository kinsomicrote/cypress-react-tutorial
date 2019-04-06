import React, { Component } from 'react';
import Todo from './Todo';
import './App.css'

let todoCounter = 1;

class App extends Component {
  state = {
    list: [
      {
        id: 1,
        value: "Buy Milk"
      },
      {
        id: 2,
        value: "Write tutorial"
      }
    ],
    item: ""
  };

  handleInputChange = event => {
    this.setState({ item: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const item = {
      id: todoCounter ++,
      value: this.state.item.slice()
    };
    this.setState({
      list: this.state.list.concat(item),
      item: ""
    });
  };

  handleRemove = id => {
    this.setState({
      list: this.state.list.filter(c => c.id !== id)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>Add Todo</h2>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                autoFocus
                value={this.state.item}
                onChange={this.handleInputChange}
                placeholder="Enter a task"
                className="form-control"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <button type="submit" className="btn btn-primary">
                Add Task
              </button>
            </div>
          </div>
        </form>
        <div className="row todo-list">
          <div className="col-md-6">
            <h3>Lists</h3>
            {
              !this.state.list.length
              ? (
                <div className="no-task">
                  No task!
                </div>
              ) : (
                <ul>
                  {this.state.list.map(item => {
                    return (
                      <li key={item.id}>
                        <Todo {...item} removeTodo={this.handleRemove} />
                      </li>
                    );
                  })}
                </ul>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
