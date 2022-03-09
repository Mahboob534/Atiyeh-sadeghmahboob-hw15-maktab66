import React, { Component } from 'react'
import TodoForm from './TodoForm';
import Todolist from './Todolist';

export default class extends Component {
    constructor() {
        super()
        this.state = {
            list:[{id:1, title: "text"}]              
            
        }
    }
    addList=(title)=>{
      
      this.setState({ list:[...this.state.list,{id:Math.random(),title}]})
    }
    // editlist=(id)=>{
        
    // }
  
    render() {
      
console.log(this.state.list);
        return (
            <div>
                <TodoForm addList={this.addList}/>
                <Todolist  todolist={this.state.list} />

            </div>
// todoedit={this.editlist }
        )
    }
}
