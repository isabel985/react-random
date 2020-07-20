import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <tr>
                <td><img style={{ width: "50px" }} src={this.props.item.image} /> </td>
                <td>{this.props.item.title}</td>
                <td>In stock</td>
                <td>
                    {this.props.numInCart}
                </td>
                <td>${this.props.item.price.toFixed(2)}</td>
                <td className="text-right">
                    <button className="btn btn-sm btn-danger" onClick={() => this.props.removeItem(this.props.item)} >&ndash;</button>
                    <button className="btn btn-sm btn-success" onClick={() => this.props.addItem(this.props.item)}>+</button>
                </td>
            </tr>
        )
    }
}
