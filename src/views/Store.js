import React, { Component } from 'react'
import axios from 'axios';
import ProductsList from '../components/ProductsList';

export default class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount = async () => {
        await axios.get('https://fakestoreapi.com/products')
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <ProductsList products={this.state.products} cart={this.props.cart} addItem={this.props.addItem} />
            </React.Fragment>
        )
    }
}