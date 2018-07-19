import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';

import {fetchGitDetails} from '../actions/appActions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            git: {}
        };
    }

    componentWillMount () {
        let username = (this.props.user && this.props.user.hasOwnProperty('username')) ? this.props.user.username: undefined;
        this.props.fetchGitDetails(username);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.git, 'these are next props');
        if (nextProps.git)
            this.setState({git: nextProps.git});
    }
    
    render() {
        console.log(this.state.git, 'git details');
        if (!this.state.git || _.isEmpty(this.state.git)) return <div>Loading...</div>;
        return (
            <div className="gitDetails">
                <ul className="gitDetailsList">
                    {_.map(this.state.git, (v, k) => { return (<li key={k}>{k + ': ' + v}</li>); })}
                </ul>
            </div>
        );
    }
};

Home.propTypes = {
    user: PropTypes.object.isRequired,
    fetchGitDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        user: state.app.user,
        git: state.app.git
    };
};

export default connect(mapStateToProps, {fetchGitDetails})(Home);