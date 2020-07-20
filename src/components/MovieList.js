import React, { Component } from 'react'
import MovieItem from './MovieItem'

export default class MovieList extends Component {
    render() {
        return (
            <React.Fragment>
                {this.props.movies.map(movie => <MovieItem key={movie.id} movie={movie} db={this.props.db} watchList={this.props.watchList} />)}
            </React.Fragment>
        )
    }
}
