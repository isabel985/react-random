import React, { Component } from 'react';
import axios from 'axios';
import RacerRows from '../components/RacerRows';

export default class Racer extends Component {
    constructor() {
        super();
        this.state = {
            racers: []
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const season = e.target.year.value;
        const round = e.target.season.value;

        axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
            .then(res => {
                this.setState({
                    racers: res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                })
            })

    }

    render() {
        return (
            <div>
                <form className="form-inline" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="year" id="" className="form-control" placeholder="year" />
                        <input type="text" name="season" id="" className="form-control" placeholder="season" />
                        <input type="submit" />
                    </div>
                </form>
                <div className="table-responsive">
                    <table className="table table-striped table-inverse">
                        <thead className="thead-inverse">
                            <tr>
                                <th>Position</th>
                                <th>Name</th>
                                <th>Points</th>
                                <th>Wins</th>
                                <th>Nationality</th>
                                <th>Constructor</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RacerRows racers={this.state.racers} />
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
