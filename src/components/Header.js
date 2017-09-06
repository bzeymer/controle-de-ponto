import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleNav } from '../actions/nav';

import '../styles/css/Header.css';
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";
import NavigationMenu from "material-ui/svg-icons/navigation/menu";
import { FlatButton, IconButton } from "material-ui";

class Header extends Component {

    onMainMenuClick() {
        this.props.toggleNav();
    }

    render() {
        return ( 
            <div className="Header">
                <IconButton onClick={() => this.onMainMenuClick()}>
                    <NavigationMenu/>
                </IconButton>
                <h1>Cadastro de Ponto</h1>
                <FlatButton
                    icon={<ActionAccountCircle/>}
                    label="Breno"
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleNav: toggleNav
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

