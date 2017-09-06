import React, { Component } from 'react';

import '../styles/css/Header.css';
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";
import DeviceAccessTime from "material-ui/svg-icons/device/access-time";
import { FlatButton, IconButton } from "material-ui";

import logo from "../images/logo.png";

export default class Header extends Component {

    render() {
        return ( 
            <div className="Header">
                <IconButton
                    style={{
                        width: 96,
                        height: 96,
                        padding: 24,
                    }}
                    iconStyle={{
                        width: 48,
                        height: 48,
                    }}
                >
                    <DeviceAccessTime className="Header-logo"/>
                </IconButton>
                <h1>Controle de ponto</h1>
                <FlatButton className="Header-userDiv"
                    icon={<ActionAccountCircle className="Header-userIcon"/>}
                    label="Breno"
                />
            </div>
        );
    }
}

