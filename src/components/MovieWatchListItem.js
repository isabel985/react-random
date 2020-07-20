import React, { Component } from 'react';

export default class MovieWatchListItem extends Component {
    render() {
        return (
            // They will have the same format for each card (a Bootstrap card), but on the watch list page you will only need to display the movie's poster image, title, vote average and a button labeled 'Watched'.
            <div className="col-md-3">
                <div className="card" style={{ margin: "15px 0" }}>
                    <img src={this.props.movie.imgSrc} className="card-img" alt={this.props.movie.original_title} />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.movie.original_title}</h4>
                        <p className="card-text">Rating: {this.props.movie.vote_average}</p>
                        <button onClick={() => this.props.archiveMovie(this.props.movie)} className="btn btn-block btn-warning" >Watched</button>
                    </div>
                </div>
            </div>
        )
    }
}
