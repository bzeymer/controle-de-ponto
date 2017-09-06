import React, { Component } from 'react';

import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

import '../styles/css/App.css';

export default class App extends Component {

    render() {
        return ( 
            <div className="App">
                <Header/>
                <Nav/>
                <div className="App-content">
                    
                    {this.props.children}

                 </div>
                <Footer/>
            </div>
        );
    }
}

