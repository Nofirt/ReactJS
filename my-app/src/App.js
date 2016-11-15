import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList>

        </ToDoList>
      </div>
    );
  }
}

class ToDoList extends Component {
  constructor(){
    super();
    this.state={todos:[{name:'', isCompleted:false}, {showComplete:false}]}
  }

  save = (value) => {
    this.setState({
      todos:[...this.state.todos, {name: value,isCompleted:false}, {showComplete:false}],
    });
  }

  complete = (index) => {
    this.state.todos[index].isCompleted =!
    this.state.todos[index].isCompleted;
    console.log(index);
    console.log(this.state.todos[index].isCompleted);

    this.setState({
      todos:this.state.todos
    });
  }

  completed = (index) => {
    this.setState({
      todos:this.state.todos.isCompleted == false,
      todos:this.state.todos.showComplete !== false
    });
  }

  active = (index) => {
    this.setState({
      todos:this.state.todos.isCompleted == false,
      todos:this.state.todos.showComplete == false
    });
  }
  allTodos = (index) => {
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


  render() {
    const listItems = this.state.todos.filter(function(todos){return todos.showComplete == false}).map((todo, index) => {
      return (
        <li key={index} >
          <div id="roundedOne" id="left-side">
            <input id="roundedOne"
                   type='checkbox'
                   data-index={index}
                   checked={todo.isCompleted}
                   onChange={this.complete.bind(this, index)} />
            <label for="roundedOne"></label>
          </div>
          <div id="middle">
            {todo.name}
            {todo.isCompleted ? ' completed' : ' not completed'}
          </div>
          <div id="right-side">
            <button id="but"
                  onClick={this.deleteItem.bind(this, index)} >
                  <span>X</span>
            </button>
          </div>
          <div id="clear"></div>
          <button onClick={this.completed.bind(this.isCompleted, index)}>Completed</button>
          <button onClick={this.active.bind(this.isCompleted, index)}>Active</button>
          <button onClick={this.allTodos.bind(this, index)}>All</button>
        </li>
    )
    });

    return (
      <div id="todo-body">
        <h1>Todo List</h1>
          <GetInfo save={this.save} />
        <ul>{listItems}</ul>
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
      this.props.save(this.state.value);
      this.state.value = '';
    }
  }
  render(){
    return(
      <input type='text' value={this.state.value} onKeyPress={this.addToDoItem} onChange={this.handleChange} placeholder='What you want to add?' />
    )
  }
}

export default App;
