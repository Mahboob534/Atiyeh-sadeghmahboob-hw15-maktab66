import React, { Component } from 'react'
import TodoItems from './TodoItems';
import { ListGroup } from 'react-bootstrap';

export default class Todolist extends Component {
  handleTodo = (item) => {
    this.props.deleteTodo(item)

  }
  handledEditTodo = (todo) => {
    this.props.editTodo(todo)
   // console.log("todolistedit", todo);
  }

  render() {
    return (
      <ListGroup>
        {this.props.todolist.map((todo) =>
          <TodoItems
            todo={todo.title} id={todo.id} delTask={() => this.handleTodo(todo.id)} editTask={this.handledEditTodo} />
        )}
      </ListGroup>
    )
  }
}

