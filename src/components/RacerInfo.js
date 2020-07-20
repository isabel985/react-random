import React, { Component } from 'react'

export default class RacerInfo extends Component {
    // const racer = this.props.racer;

    render() {
        return (
            <tr>
                <td>{this.props.racer.position}</td>
                <td>{this.props.racer.Driver.givenName} {this.props.racer.Driver.familyName}</td>
                <td>{this.props.racer.points}</td>
                <td>{this.props.racer.wins}</td>
                <td>{this.props.racer.Driver.nationality}</td>
                <td>{this.props.racer.Constructors[0].nationality}</td>
            </tr>
        )
    }
}
