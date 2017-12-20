import React, { Component } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }
  }

  render() {
    return (
          <div className='desktop_header'>
            <div className='desktop_header_inner'>
              <Link to='/' className='desktop_header_logo'></Link>
              <ul className='desktop_nav'>
                <Link to='/what-we-do'>WHAT WE DO</Link>
                <Link to='/industries'>INDUSTRIES</Link>
                <Link to='/learn'>LEARN</Link>
                <Link to='/about'>ABOUT</Link>
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