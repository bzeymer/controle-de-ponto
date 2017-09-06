import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Paper } from 'material-ui';

import '../styles/css/Cadastro.css';

class Cadastro extends Component {

    render() {
        return (
            <Paper
                className="Cadastro"
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

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);