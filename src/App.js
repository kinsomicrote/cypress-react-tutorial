import React, { Component } from 'react';
import Todo from './Todo';

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
      <React.Fragment>
        <h2>Add Todo</h2>
        <div>
          <input
            type="text"
            autoFocus
            value={this.state.item}
            onChange={this.handleInputChange}
            placeholder="Enter a task"
          />
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>
            Add
          </button>
        </div>
        <div>
          <h3>Lists</h3>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <Todo {...item} removeTodo={this.handleRemove} />
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
