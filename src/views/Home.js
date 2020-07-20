import React, { Component } from 'react';
import UsersList from '../components/UsersList';
import firebase from '../firebase';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            formFirstName: '',
            formLastName: '',
            formLocation: ''
        }
        // test

        this.db = firebase.firestore();
    }

    componentDidMount() {
        this.db.collection('users').get().then(querySnapshot => {
            let data = [];
            querySnapshot.forEach(doc => {
                data.push(doc.data())
            })

            this.setState({
                users: data
            })
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            // email: event.target.email.value,
            location: event.target.location.value
        }

        this.db.collection('users').add(user)
            .then(dofRef => console.log('User created successfully'))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input style={{ margin: "10px 0" }} defaultValue={this.state.formFirstName} type="text" name="firstName" id="" className="form-control" placeholder="First Name" />
                                <input style={{ margin: "10px 0" }} defaultValue={this.state.formLastName} type="text" name="lastName" id="" className="form-control" placeholder="Last Name" />
                                {/* <input style={{ margin: "10px 0" }} defaultValue={this.state.formInput.email} type="email" name="email" id="" className="form-control" placeholder="Email" /> */}
                                <input style={{ margin: "10px 0" }} defaultValue={this.state.formLocation} type="text" name="location" id="" className="form-control" placeholder="Location" />
                                <input style={{ margin: "10px 0" }} type="submit" value="Submit" className="btn btn-primary btn-block"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <UsersList users={this.state.users} />
            </div>
        )
    }
}
