import React, { Component } from 'react';

import '../styles/css/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Home
