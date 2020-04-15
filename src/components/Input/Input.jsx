import React, { Component } from 'react';


class Input extends Component {
    render() {
        return (
            <div className="container">
                <input type="text" name="Search" placeholder="search for list of course"/>
            </div>
        );
    }
}

export default Input;