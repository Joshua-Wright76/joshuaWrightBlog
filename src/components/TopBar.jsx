import React, { Component } from 'react';

class TopBar extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className = "topBar">
                <h2>
                    Home
                </h2>
                <h2>
                    About
                </h2>
                <h2>
                    Contact
                </h2>
            </div>
        )
    }
}

export default TopBar;