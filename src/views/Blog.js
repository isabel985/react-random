import React, { Component } from 'react';
import axios from 'axios';

export default class Blog extends Component {

    componentDidMount() {
        // request to law-firm
        axios.get('http://localhost:5000/api/users')
            .then(res => console.log(res))
            .then(data => console.log(data))
    }

    render() {
        // console.log(this.state.posts)
        return (
            <div>
                {/* <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-md-1">
                                <img src="" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md">
                                <div>
                                    <a href=""></a>
                                </div>
                                <cite></cite>
                                <br />
                                <small></small>
                            </div>
                        </div>
                    </li>
                </ul> */}
            </div>
        )
    }
}
