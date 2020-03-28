import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos/Todos';
import AddTodo from './components/Todos/AddTodo';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import axios from 'axios';
// import uuid from 'uuid';
import './App.css';

export class App extends Component {
  state = {
    todos: []
  }
  
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=15")
      .then(res => this.setState({ todos: res.data }))
  }

  //mark Todo //Toggle complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map( todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    });
  }

  //Add todo
  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }) )
    // const newTodo = {
    //   id: uuid.v4(),
    //   title,
    //   completed: false
    // }
    // this.setState({ todos: [...this.state.todos, newTodo] });
    
  }

  //delete todo
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)] }))
      
  }


  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render= { props => (
              // <React.Fragment>
                <>
                <AddTodo addTodo={ this.addTodo } />
                <Todos todos={this.state.todos} 
                markComplete={this.markComplete}
                delTodo={this.delTodo} />
              {/* </React.Fragment> */}
                </>
            )} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/services" component={Services} />

          </div>
        </div>
      </Router>
    )
  }

}

export default App;
