import React from 'react';
import './Todo.css';

const Todo = (props) => {
    return(
        <div className={`reg${props.todo.done ? ' done' : ''}`} onClick={() => props.markComplete(props.todo.id)}>
            <h3>{props.todo.name}</h3>
        </div>
    )
}

export default Todo