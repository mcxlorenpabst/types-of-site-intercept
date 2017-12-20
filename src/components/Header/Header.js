import React, { Component } from 'react';
// import axios from 'axios';
import { li } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() {
    return (
          <div className='desktop_header'>
            <div className='desktop_header_inner'>
              <div to='/' className='desktop_header_logo'></div>
              <ul className='desktop_nav'>
                <li to='/what-we-do'>WHAT WE DO</li>
                <li to='/industries'>INDUSTRIES</li>
                <li to='/learn'>LEARN</li>
                <li to='/about'>ABOUT</li>
              </ul>
              <div className='header_btn header_lets_talk'>LET'S TALK</div>
              <div className='header_btn header_login'>LOGIN</div>
              <div className='header_btn header_us'>US</div>
            </div>
          </div>
    );
  }

}


export default Header;