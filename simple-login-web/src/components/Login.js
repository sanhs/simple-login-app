import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {authenticate} from "../actions/appActions";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit (e) {
        e.preventDefault();
        const user = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        };
        this.props.authenticate({user: user})
    }

    render () {
        return (
            <div className="form-container">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>UserName: </label> <br/>
                        <input type="text" name="username" onChange={this.onChange} value={this.state.username}/>
                    </div>
                    <div>
                        <label>Email: </label> <br/>
                        <textarea name="email" onChange={this.onChange} value={this.state.email}/>
                    </div>
                    <div>
                        <label>Password: </label> <br/>
                        <textarea name="password" onChange={this.onChange} value={this.state.password}/>
                    </div>
                    <div>
                        <button type="submit">submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    authenticate: PropTypes.func.isRequired
};

export default connect(null, {authenticate})(Login)