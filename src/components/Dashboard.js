import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Paper } from 'material-ui';

import '../styles/css/Dashboard.css';

class Dashboard extends Component {

    render() {
        return (
            <Paper
                className="Dashboard"
                zDepth={3}
            >

            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);