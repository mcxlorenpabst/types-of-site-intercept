import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render() {
    return (
          <div className='desktop_header'>
            <div className='desktop_header_inner'>
              <div to='/' className='desktop_header_logo'></div>
              <ul className='desktop_nav'>
                <li onClick={ () => this.props.updateSurveyType('inline') }>Inline Survey</li>
                <li onClick={ () => this.props.updateSurveyType('tab') }>Feedback Tab</li>
                <li onClick={ () => this.props.updateSurveyType('modal') }>Pop Up Modal</li>
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