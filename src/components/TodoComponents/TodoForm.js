import React from 'react';


class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
          item: event.target.value
        })
      }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state.item)
        this.setState({
            item: ''
        })
    }

    

    render() {
        return(
            <div>
                <form>
                    <input
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChange}
                    />
                </form>
                <button onClick={this.handleSubmit}>Add a Todo</button>
            </div>
        )
    }
}

export default TodoForm;