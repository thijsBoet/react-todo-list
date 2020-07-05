import React, { Component } from "react";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

export default class App extends Component {
  state = {
    items: [
      {id:1, title: 'wake up'},
      {id:2, title: 'do groceries'}
    ],
    id: uuidv4(),
    item:'',
    editItem: false
  }

  handleChange = e => {
    console.log(e, 'change')
  }
  handleSubmit = e => {
    console.log(e, 'submit')
  }
  clearList = () => {
    console.log('clear')
  }
  handleDelete = id => {
    console.log(`handle delete ${id}`)
  }
  handleEdit = id => {
    console.log(`handle edit ${id}`)
  }

  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              <TodoInput
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                handleEdit={this.state.handleEdit}
              />

              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.state.handleEdit}
              />
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

