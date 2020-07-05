import React, { Component } from 'react'
import './TodoItem.css'

export default class TodoItem extends Component {
  render() {
    const {title, handleDelete, handleEdit} = this.props
    return (
      <div className="card card-body my-3">
        <li className="list-group text-capitalize d-flex justify-content-between my-2">
          <h6>{title}</h6>
          <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handleEdit}>
              <i className="fas fa-pen" />
            </span>
            <span className="mx-2 text-danger" onClick={handleDelete}>
              <i className="fas fa-trash" />
            </span>
          </div>
        </li>
      </div>
    );
  }
}
