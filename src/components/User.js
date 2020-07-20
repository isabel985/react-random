import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div className="card" style={{ margin: "10px" }}>
                <img className="card-img-top" src="https://place-hold.it/300x200" alt={this.props.firstName} />
                <div className="card-body">
                    <h4 className="card-title">{this.props.firstName} {this.props.lastName}</h4>
                    <p className="card-text">{this.props.email}</p>
                    <p className="card-text">{this.props.location}</p>
                </div>
            </div>
        )
    }
}
