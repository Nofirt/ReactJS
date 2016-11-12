import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList></ToDoList>
      </div>
    );
  }
}

class ToDoList extends Component {
  constructor(){
    super();
    this.state={todos:[{name:'',isCompleted:false}]}
  }

  save = (value) => {
    this.setState({
      todos:[...this.state.todos, {name: value,isCompleted:false}]
    });
  }

  complete = (index) => {
    this.state.todos[index].isCompleted = !this.state.todos[index].isCompleted;
    this.setState({
      todos:this.state.todos
    });
  }
  deleteItem = (index) => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos
    });
  }
  showAll = () => {

    this.setState({
      todos:this.state.todos
    });
  }


  render() {
    const listItems = this.state.todos.map((todo, index) => {
      return (
        <li key={index}>
          <input type='checkbox' data-index={index} checked={todo.isCompleted} onChange={this.complete.bind(this, index)} />{todo.name}
          {todo.isCompleted ? ' completed' : ' not completed'}
          <button onClick={this.deleteItem.bind(this, index)} >X</button>
        </li>
    )
    });
//Filters
const filterItems = this.state.todos.map((todo, index) => {
  return (
<div>
      <button onClick={this.showAll} >All</button>
      <button onClick={this.deleteItem.bind(this, index)} >Active</button>
      <button onClick={this.deleteItem.bind(this, index)} >Completed</button>
</div>

)
});
//End of filters



    return (
      <div>
        <GetInfo save={this.save} />
        <ul>{listItems}</ul>
        <footer>{filterItems}</footer>
      </div>
    );
  }
}

class GetInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {value:''};
    this.addToDoItem = this.addToDoItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  }
  addToDoItem(event){
    if(event.key === 'Enter'){
      console.log(this.state.value);
      this.props.save(this.state.value);
    }
  }
  render(){
    return(
      <input type='text' value={this.state.value} onKeyPress={this.addToDoItem} onChange={this.handleChange} placeholder='What you want to add?' />
    )
  }
}

/*class OutputInfo extends Component {
  constructor(){}
  render(){
  const listitems =
  }
}
*/
export default App;
