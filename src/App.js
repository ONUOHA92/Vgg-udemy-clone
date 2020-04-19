import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Route, Switch } from 'react-router-dom'

// THIS ARE PAGES FOR THE ROUTE
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import SignOut from './pages/SignOut'
import Default from './pages/Default'

// THIS IS THE COMPONENT PAGES
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Dashboard from './pages/Dashboard';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* Navbar */}
        <main>
        <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/SIgnIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/SignOut" component={SignOut} />
             <Route path="/Dashboard" component={Dashboard} />
            <Route component={Default} />
          </Switch>
        </main>
      </React.Fragment>


    );
  }
}

export default App;
