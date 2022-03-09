import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

export default class TodoForm extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        //console.log(e.target);
        if (this.state.value !== '') {
            this.props.addList(this.state.value)
            this.setState({ value: '' })
        }
        e.target.reset();
    }

    handleChange(e) {
        this.setState({ value: e.target.value })

    }

    render() {
        return (
            <Form onSubmit={e => this.handleSubmit(e)} className="d-flex">
                <Form.Control type="text" placeholder="add your task" name="Task" onChange={e => this.handleChange(e)} />
                <Button type="submit" variant="warning">Add</Button> </Form>
        )
    }
}
