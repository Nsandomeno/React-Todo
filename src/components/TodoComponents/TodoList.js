// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo.js';

const TodoList = props => {

    return(
        <div>
            <h1>To-Do List: </h1>
            <ul>
            {props.todoList.map((todo => 
                <Todo key={todo.id} todo={todo} markComplete={props.markComplete}/>
            ))}
            </ul>
        </div>
    )
}

export default TodoList;
