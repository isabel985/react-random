import React, { Component } from 'react'
import User from './User'

export default class UsersList extends Component {
    render() {
        const users = this.props.users

        return (
            <div className="row">
                {users.map((user, index) => <User key={index} firstName={user.firstName} lastName={user.lastName} email={user.email} location={user.location} />)}
            </div>
        )
    }
}
