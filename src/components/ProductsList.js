import React, { Component } from 'react'
import Product from './Product'

export default class ProductsList extends Component {
    render() {
        // console.log(this.props.cart)
        return (
            <div className="container">
                <h3 className="h3">Products </h3>
                <div className="row">
                    {this.props.products.map((product) => <Product key={product.id} product={product} cart={this.props.cart} addItem={this.props.addItem} />)}
                </div>
            </div>
        )
    }
}
