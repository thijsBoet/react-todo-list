import React, { Component } from "react";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import { v4 as uuidv4 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <TodoInput/><br/>
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}

