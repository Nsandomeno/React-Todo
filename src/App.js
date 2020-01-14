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
    },] || '',
    searchTerm: ''
    }
  }

    //   handleChange = (event) => {
    //     event.preventDefault()
    //     this.setState({
    //         searchTerm: event.target.value
    //     });
    // }

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
    },
    this.saveToLocal
    )
  }



  clearCompleted = (id) => {
    const uncompleteList = this.state.todoList.filter(todo => todo.done === false)
    const clearAll =  localStorage.removeItem('PreSearchState')
    this.setState({
      todoList: uncompleteList
    })  
    return clearAll 
  }

  handleSearch = (todoName) => {
    const searchResults = this.state.todoList.filter(todo => todo.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    this.setState({
      todoList: searchResults
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
        searchTerm: event.target.value
    });
  }

  saveToLocal = () => {
    const local = this.state.todoList
    localStorage.setItem('PreSearchState', JSON.stringify(local) )

  }

  clearSearch = (event) => {
    event.preventDefault()
    const oldState = JSON.parse(localStorage.getItem('PreSearchState'))
    this.setState({
      todoList: oldState,
      searchTerm: ''
    })
    // if (localStorage === null) {
    //   return alert("There is nothing to clear. Please add a task.")
    // }
  }



  render() {
    return (
      <div>
        <TodoForm todoList={this.state.todoList} addTodo={this.addTodo} clearCompleted={this.clearCompleted}  />
        <div>
          <form>
            <input 
            type="text"
            name="searchTerm"
            value={this.state.searchTerm}
            placeholder="Search"
            onChange={this.handleChange}
            />
          </form>
          { localStorage.length === 0 ?
          <div>
            <button onClick={this.handleSearch}>Search</button>
          </div> :
          <div>
            <button onClick={this.handleSearch}>Search</button>
            <button onClick={this.clearSearch}>Clear Search</button>
          </div>
          }

        </div>
       <TodoList todoList={this.state.todoList} markComplete={this.markComplete}  />
      </div>
    );
  }
}

export default App;
