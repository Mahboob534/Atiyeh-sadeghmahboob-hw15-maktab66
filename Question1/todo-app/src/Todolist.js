import React, { Component } from 'react'
import TodoItems from './TodoItems';
import { ListGroup,Form} from 'react-bootstrap';

export default class Todolist extends Component {
  removeToDo(item){
   let findItem = todo.title.fi;

  }
 
  render() {
    return (
     <ListGroup>
         {this.props.todolist.map((todo) =>
           <TodoItems       
             todo={todo.title} remove={() => this.removeToDo(todo)} />  
         )}
     </ListGroup>
    )
  }
}

// {this.state.list.map((item, i) => <li><TodoItems 
//   key={item.id}              
//    index={i + 1} title={item.todo} remove={() => this.removeToDo(item)} doneToDo={() => this.doneToDo(item.todo)} /> </li>)}