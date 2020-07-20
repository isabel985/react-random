import React, { Component } from 'react';
import MovieArchivedListItem from '../components/MovieArchivedListItem';
import { Link } from 'react-router-dom';

export default class MovieArchivedList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{ margin: "20px 0" }}>
                    <h2>ARCHIVED MOVIES</h2>
                </div>
                <div className="row" style={{ margin: "20px 0" }} className="form-inline">
                    <div className="col-md-6" style={{ paddingLeft: "0" }}>
                    </div>
                    <div className="col-md"></div>
                    <div className="col-md-4" style={{ paddingRight: "0" }}>
                        <Link to="/movies-watch-list">
                            <button type="submit" style={{ width: "60%", marginLeft: "auto" }} className="btn btn-warning" value="View Watch List">View Watch List</button>
                        </Link>
                        <Link to='/movies-archived-list'>
                            <button type="submit" style={{ width: "30%" }} className="btn btn-secondary float-right" value="Watched">Watched</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    {this.props.archivedMovies.map(movie => <MovieArchivedListItem key={movie.id} movie={movie} />)}
                </div>
            </div>
        )
    }
}
