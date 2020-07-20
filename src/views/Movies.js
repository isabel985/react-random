import React, { Component } from 'react'
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';

export default class Movies extends Component {
    render() {
        return (
            <div className="container">
                <div className="row" style={{ margin: "20px 0" }}>
                    <h2>WELCOME TO THE MOVIES PAGE</h2>
                </div>
                <div className="row" style={{ margin: "20px 0" }} className="form-inline">
                    <div className="col-md-6" style={{ paddingLeft: "0" }}>
                        <form onSubmit={this.props.handleSubmit}>
                            <input style={{ width: "65%" }} type="text" name="movie" id="" className="form-control" defaultValue="" placeholder="Search for a movie title..." />
                            <input style={{ width: "25%", marginLeft: "10px" }} className="btn btn-primary" type="submit" value="Submit" />
                        </form>
                    </div>
                    <div className="col-md"></div>
                    <div className="col-md-4" style={{ paddingRight: "0" }}>
                        <Link to="/movies-watch-list">
                            <button type="submit" style={{ width: "60%", marginLeft: "auto" }} className="btn btn-warning" value="View Watch List">View Watch List</button>
                        </Link>
                        <Link to='/movies-archived-list'><button type="submit" style={{ width: "30%" }} className="btn btn-secondary float-right" value="Watched">Watched</button>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <MovieList db={this.props.db} movies={this.props.movies} />
                </div>
            </div>
        )
    }
}
