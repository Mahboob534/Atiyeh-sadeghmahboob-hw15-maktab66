import React, { Component } from 'react'
import { ListGroup,Form} from 'react-bootstrap';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';

export default class TodoItem extends Component {
  render() {
    return (
        <ListGroup.Item  className="d-flex justify-content-between"><Form.Check.Input  /> {this.props.todo}< RiDeleteBin6Fill  /> <MdOutlineEdit/></ListGroup.Item>
    )
  }
}
{/* <ListGroup.Item  className="d-flex justify-content-between"><Form.Check.Input  /> {todo.title}< RiDeleteBin6Fill  /> <MdOutlineEdit/></ListGroup.Item> */}

{/* <li style={{ background: 'pink', color: 'white', display: 'flex', justifyContent: 'space-between' }}>
        {this.props.index}
        {this.props.title}
        <button onClick={this.props.remove}>X</button>
        <button onClick={this.props.doneToDo}>done</button>
      </li> */}