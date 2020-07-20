import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Product extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-6">
                <div className="product-grid2">
                    <div className="row">
                        <div className="product-image2">
                            <Link to={`product/${this.props.product.id}`}>
                                <img className="img-fluid pic-1" src={this.props.product.image} alt={this.props.product.title} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <button onClick={() => this.props.addItem(this.props.product)} className="add-to-cart btn btn-success">Add to cart</button>
                        <div className="product-content">
                            <h5 className="title">
                                <Link to={`product/${this.props.product.id}`}>
                                    {this.props.product.title}
                                </Link>
                            </h5>
                            <span className="price">${this.props.product.price.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
