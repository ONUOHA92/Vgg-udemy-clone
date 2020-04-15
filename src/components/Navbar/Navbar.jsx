import React from 'react';

// THIS IS THE PAGE FOR THE ROUTER
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar(props) {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-danger">
      <Link to='/' className='navbar-brand'>
        <ul>
          <li><a href="/">Udemy</a></li>
        </ul>
      </Link>
      <div className="collapse navbar-collapse show ml-sm-5 ">
        <ul className="navbar-nav">
          <li className='navbar-item'>
            <Link className='nav-link' to='/'>
              home
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link' to='/SignIn'>
              login
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link' to='/SignUp'>
              sign up
            </Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link' to='/SignOut'>
              logout out
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Navbar;
