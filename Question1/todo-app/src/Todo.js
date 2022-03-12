import React, { Component } from 'react'
import TodoForm from './TodoForm';
import Todolist from './Todolist';


export default class extends Component {
    constructor() {
        super()
        this.state = {
            list: []

        }
    }
    addList = (title) => {

        this.setState({ list: [...this.state.list, { id: Math.random(), title }] })
    }
    
    deleteTodo = (item) => {
        let filter = this.state.list.filter(todo => todo.id !== item)
        this.setState({ list: filter })

    }
    editTodo = (item) => {
        this.setState((prevState) => ({
            list: prevState.list.map((obj) =>
                obj.id === item.id ? { id: item.id, title: item.title } : obj
            ),
        }))


    }
    

    render() {

      //  console.log(this.state.list);
        return (
            <div>
                <TodoForm addList={this.addList} />
                <Todolist todolist={this.state.list}
                    deleteTodo={this.deleteTodo}
                    editTodo={this.editTodo} />
                   

            </div>
            
        )
    }
}
