import React, { Component } from 'react'
import RacerInfo from './RacerInfo'

export default class RacerRows extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.racers.map(racer => <RacerInfo key={racer.position} racer={racer} />)}
            </React.Fragment>
        )
    }
}
