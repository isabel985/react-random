import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodosList extends Component {
    render() {
        const todos = this.props.todos

        return (
            <ul className="list-group">
                {todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
            </ul>
        )
    }
}
