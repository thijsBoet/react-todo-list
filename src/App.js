import React, { Component } from "react";
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import { v5 as uuidv5 } from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

const v1options = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date("2011-11-01").getTime(),
  nsecs: 5678,
};
uuidv5(v1options);
console.log(v1options);

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

