import React, { Component } from 'react';

import ActionFavorite from "material-ui/svg-icons/action/favorite";
import { red400 } from "material-ui/styles/colors";

import '../styles/css/Footer.css';

export default class Footer extends Component {

    render() {
        return ( 
            <div className="Footer">
                <div className="Footer-info">
                    <small className="Footer-small">made with </small>
                    <ActionFavorite color={red400}/>
                    <small className="Footer-small"> by myself</small>
                </div>
            </div>
        );
    }
}

