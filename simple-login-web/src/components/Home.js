import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {fetchGitDetails} from '../actions/appActions';

class Home extends Component {
    componentWillMount () {
        this.props.fetchUser(this.props.user.username);
    }

    componentWillRecieveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.git)
            this.props.git = nextProps.git
    }
    
    render() {
        return (
            <div>HOME</div>
        );
    }
};

Home.propTypes = {
    user: PropTypes.object,
    fetchGitDetails: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    return {
        user: state.user,
        git: state.git
    };
}

export default connect(mapStateToProps, {fetchGitDetails})(Home);