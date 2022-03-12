import React, { Component } from 'react'
import { ListGroup, Form, Button } from 'react-bootstrap';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdOutlineEdit } from 'react-icons/md';
import { BiPaste } from 'react-icons/bi';
export default class TodoItem extends Component {
  state = {
    flagEdit: false,
    checked:false,
    list: []

  }
  componentDidMount() {
    this.setState({ list: this.props.todo })
  }

  editHandle = () => {
    this.setState((prevState) => ({ flagEdit: !prevState.flagEdit }))
    if (this.state.flagEdit) {
      this.props.editTask({ id: this.props.id, title: this.state.list })
    }
  }


  render() {
    return (
      <ListGroup.Item className="d-flex justify-content-right m-2">
        <Form.Check.Input className=" mx-2" onChange={(e) => this.setState({checked:e.target.checked})}/>
      {!this.state.checked ?  <Form.Control className=" mx-2" type="text" value={this.state.list} disabled={this.state.flagEdit ? false : true} onChange={(e) => this.setState({ list: e.target.value })} />: <Form.Control className="text-decoration-line-through mx-2" type="text" value={this.state.list}  disabled /> } 
       
        <Button variant="danger"onClick={this.props.delTask}>< RiDeleteBin6Fill  /></Button>
        
       {!this.state.flagEdit ? <Button variant="success" onClick={this.editHandle}><MdOutlineEdit
        /></Button> : <Button variant="primary" onClick={this.editHandle}><BiPaste/></Button> }   </ListGroup.Item>
    )
  }
}
