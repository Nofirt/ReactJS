import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
  <GetInfo />
  <ul><OutputInfo /></ul>
      </div>
    );
  }
}

class ToDoList extends Component {
  constructor(){
    super();
    this.state={todos:[{name:'list',isCompleted:false}]}
  }

  render() {
    return(
      'hi'
    )
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

class OutputInfo extends Component {
  constructor(){}
  render(){
    return(
      <li>{}</li>
    )
  }
}
export default App;
