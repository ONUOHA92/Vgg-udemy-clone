import React, { Component } from 'react';
import Userboard from '../components/Userboard/Userboard'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <div className="container">
                    <h1>welcome to users dashboad</h1>
                    <Userboard />
                </div>
            </div>
        );
    }
}

export default Dashboard;