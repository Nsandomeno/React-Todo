import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super()
    this.state = {
    todoList: [{
      name: '',
      id: '',
      done: false
    },]
    }
  }

  markComplete = (id) => {
    const newTodoList = this.state.todoList.map((todo) => {
      if (id === todo.id) {
        return {
          ...todo,
          done: !todo.done
        } 
      } else {
        return todo
      }
    })
    this.setState({todoList: newTodoList})
  }

  addTodo = (todoTitle) => {
    const newTodo = {
      name: todoTitle,
      id: Date.now(),
      done: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    })
  }

  clearCompleted = (id) => {
    const uncompleteList = this.state.todoList.filter(todo => todo.done === false)
    this.setState({
      todoList: uncompleteList
    })
  }



  render() {
    return (
      <div>
        <TodoForm todoList={this.state.todoList} addTodo={this.addTodo} clearCompleted={this.clearCompleted}  />
       <TodoList todoList={this.state.todoList} markComplete={this.markComplete}  />
      </div>
    );
  }
}

export default App;
