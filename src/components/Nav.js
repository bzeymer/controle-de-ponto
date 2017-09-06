import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleNav } from '../actions/nav';

import ActionDashboard from 'material-ui/svg-icons/action/dashboard';
import ActionAlarmAdd from 'material-ui/svg-icons/action/alarm-add';
import ActionDescription from 'material-ui/svg-icons/action/description';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

import { Drawer, MenuItem, IconButton } from 'material-ui';

import '../styles/css/Nav.css';

const items = [
    {
        name: "Dashboard",
        icon: <ActionDashboard/>,
        fetch: [],
        path: "/"
    }, {
        name: "Cadastro",
        icon: <ActionAlarmAdd/>,
        fetch: [],
        path: "/cadastro"
    }, {
        name: "Relatórios",
        icon: <ActionDescription/>,
        fetch: [],
        path: "/relatorios"
    },
]

class Nav extends Component {

    onItemSelect(item) {
        if (item.path !== this.props.nav.selectedPath) {
            this.setState({selected: item});
            this.props.history.push(item.path);
            this.props.toggleNav();
        }  
    }

    onBackClick() {
        this.props.toggleNav();
    }

    render() {
        return (
            <Drawer
                docked={false}
                open={this.props.nav.open}
                onRequestChange={() => this.props.toggleNav()}
            >
                <div className="Nav">
                    <IconButton onClick={() => this.onBackClick()}>
                        <NavigationArrowBack/>
                    </IconButton>
                </div>
                {items.map((item, index) => (
                    <MenuItem
                        key={index}
                        className="Nav-item"
                        leftIcon={item.icon}
                        primaryText={item.name}
                        onClick={() => this.onItemSelect(item)}
                    />
                ))}
            </Drawer>
        );
    }
}

function mapStateToProps(state) {
    return {
        nav: state.nav
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleNav: toggleNav
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));