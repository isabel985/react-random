import React, { Component } from 'react';
import axios from 'axios';

export default class ProductInfo extends Component {
    constructor() {
        super();
        this.state = {
            product: {}
        }
    }

    componentDidMount() {
        axios.get(`https://fakestoreapi.com/products/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    product: res.data
                })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <h2>{this.state.product.title}</h2>
                        <img alt={this.state.product.title} className="img-fluid" src={this.state.product.image} />
                        <h6>${this.state.product.price}</h6>
                        <h6>{this.state.product.description}</h6>
                        <button onClick={() => this.props.addItem(this.props.product)} className="add-to-cart btn btn-success">Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }
}

