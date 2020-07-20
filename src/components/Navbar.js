import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to="/">React-Random</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/todos">Todos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/racer">F1 Racer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movies">Movies</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Store <span><i className="fa fa-shopping-cart"></i></span>
                                <span className="badge badge-dark">{this.props.cart ? this.props.cart.length : 0}</span>
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link to="/store" className="dropdown-item" >Products</Link>
                                <Link className="dropdown-item" to="/cart">Cart</Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}