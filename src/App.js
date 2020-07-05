import React, { Component } from "react";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    },);
  }
  clearList = () => {
    this.setState({
      items: [],
    });
  }
  handleDelete = id => {
    const filteredItem = this.state.items.filter(
      (item) => item.id !== id
    );
    this.setState({
      items: filteredItem,
    });
  }
  handleEdit = id => {
    
  }

  render() {
    console.log(this.state)
    console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            
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
          </div>
        </div>
      </div>
    );
  }
}

