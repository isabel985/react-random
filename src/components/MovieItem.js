import React, { Component } from 'react';
import axios from 'axios';

export default class MovieItem extends Component {
    constructor() {
        super();
        this.state = {
            base_url: "",
            size: ""
        }
    }

    componentDidMount() {
        axios.get('https://api.themoviedb.org/3/configuration?api_key=38d07aacc8c2a09e61b09922e1447787')
            .then(res => {
                this.setState({
                    base_url: res.data.images.base_url,
                    size: res.data.images.poster_sizes[3]
                })
            })
    }

    addWatchList = item => {
        const movie = {
            id: item.id,
            original_title: item.original_title,
            vote_average: item.vote_average,
            imgSrc: `${this.state.base_url}${this.state.size}${item.poster_path}`,
            archived: false,
            watched: true
        }
        this.props.db.collection('movieList').doc(`${item.id}`).set(movie)
    }

    render() {
        if (!this.props.movie.poster_path) {
            var imgSrc = "https://place-hold.it/161x242";
        } else {
            var base = this.state.base_url;
            var size = this.state.size;
            var file = this.props.movie.poster_path;
            var imgSrc = `${base}${size}${file}`
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card mb-3">
                            <div className="row no-gutters" style={{ width: "100%" }}>
                                <div className="col-md-2">
                                    <img src={imgSrc} className="card-img img-fluid" alt={this.props.movie.original_title} />
                                </div>
                                <div className="col-md-10 container-fluid">
                                    <div className="card-body">
                                        <h5 className="card-title">{this.props.movie.original_title}</h5>
                                        <p className="card-text">{this.props.movie.overview}</p>
                                        <p className="card-text">Rating: {this.props.movie.vote_average}</p>
                                        <button onClick={() => this.addWatchList(this.props.movie)} className="btn btn-warning" type="submit">Add to Watch List</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
// The movie card should display the searched movie's poster image, movie title, description (overview) and vote average.