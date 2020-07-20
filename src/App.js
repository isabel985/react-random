import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import Todos from './views/Todos';
import Blog from './views/Blog';
import Racer from './views/Racer';
import Store from './views/Store';
import ProductInfo from './views/ProductInfo';
import Cart from './views/Cart';
import Movies from './views/Movies';
import MovieWatchList from './views/MoviesWatchList';
import MovieArchivedList from './views/MovieArchivedList';
import axios from 'axios';
import firebase from './firebase';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cart: [],
            movies: [],
            watchList: [],
            archivedMovies: []
        }
        this.db = firebase.firestore()
    }

    // SHOPPING CART COMPONENTS ------------------------------------------
    addItem = item => {
        this.setState({
            cart: this.state.cart.concat(item)
        })
    }

    removeItem = item => {
        let cart = [...this.state.cart];
        var index = cart.indexOf(item);

        if (index !== -1) {
            cart.splice(index, 1)

            this.setState({
                cart: cart
            })
        }
    }

    // MOVIE COMPONENTS -----------------------------------------------------
    handleSubmit = e => {
        e.preventDefault();
        const movieSearch = e.target.movie.value;
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=38d07aacc8c2a09e61b09922e1447787&language=en-US&query=${movieSearch}&page=1&include_adult=false`)
            .then(res => {
                this.setState({
                    movies: res.data.results
                })
            })
        e.target.movie.value = ""
    }

    componentDidMount() {
        this.db.collection('movieList').where('watched', '==', true).get().then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => {
                data.push(doc.data())
            })
            this.setState({
                watchList: data
            })
        })

        this.db.collection('movieList').where('archived', '==', true).get().then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => {
                data.push(doc.data())
            })
            this.setState({
                archivedMovies: data
            })
        })

    }

    archiveMovie = item => {
        const movie = {
            id: item.id,
            original_title: item.original_title,
            vote_average: item.vote_average,
            imgSrc: item.imgSrc,
            archived: true,
            watched: false
        }
        this.db.collection('movieList').doc(`${item.id}`).set(movie)
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar cart={this.state.cart} />
                </header>

                <main className="container">
                    <Switch>
                        <Route exact path='/' render={() => <Home />} />
                        <Route exact path='/todos' render={() => <Todos />} />
                        <Route exact path='/blog' render={() => <Blog />} />
                        <Route exact path='/racer' render={() => <Racer />} />
                        <Route exact path='/store' render={() => <Store cart={this.state.cart} addItem={this.addItem} />} />
                        <Route exact path='/product/:id' render={({ match }) => <ProductInfo match={match} cart={this.state.cart} addItem={this.addItem} />} />
                        <Route exact path='/cart' render={() => <Cart cart={this.state.cart} removeItem={this.removeItem} addItem={this.addItem} />} />
                        <Route exact path='/movies' render={() => <Movies db={this.db} movies={this.state.movies} handleSubmit={this.handleSubmit} />} />
                        <Route exact path='/movies-watch-list' render={() => <MovieWatchList handleSubmit={this.handleSubmit} watchList={this.state.watchList} archiveMovie={this.archiveMovie} />} />
                        <Route exact path='/movies-archived-list' render={() => <MovieArchivedList archivedMovies={this.state.archivedMovies} />} />
                    </Switch>
                </main>
                <footer></footer>
            </div>
        )
    }
}