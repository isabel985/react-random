import React, { Component } from 'react'
import TodosList from '../components/TodosList';

export default class Todos extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            preview: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({
            todos: this.state.todos.concat(event.target.todoInput.value)
        })
    }

    handleChange = event => {
        this.setState({
            preview: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form className="form-inline" onSubmit={this.handleSubmit} style={{ margin: '25px 0' }}>
                            <div className="form-group">
                                <input onChange={this.handleChange} value={this.state.preview} type="text" name="todoInput" id="" className="form-control" />
                                <input type="submit" className="btn btn-primary" value="Add Todo" />
                            </div>
                        </form>
                        <h4>{this.state.preview}</h4>
                        <TodosList todos={this.state.todos} />
                    </div>
                </div>
            </div>
        )
    }
}
