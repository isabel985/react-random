import React, { Component } from 'react'
import axios from 'axios';

export default class MovieArchiveListItem extends Component {
    render() {

        return (
            <div className="col-md-3">
                <div className="card" style={{ margin: "15px 0" }}>
                    <img src={this.props.movie.imgSrc} className="card-img" alt={this.props.movie.original_title} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.movie.original_title}</h4>
                        <p className="card-text">Rating: {this.props.movie.vote_average}</p>
                        <button className="btn btn-block btn-secondary" disabled >Watched</button>
                    </div>
                </div>
            </div>
        )
    }
}
