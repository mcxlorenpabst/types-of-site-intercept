import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  constructor(props){
    super(props);

    this.state = {

    }

  }

  componentDidMount(){
    
  }

  render() {
    return (
      <section className='footer'>
        <div className='footer_inner'>
          <div className='footer_about'>
            MaritzCX combines technology, data, and research expertise to make sure the right people in your organization can understand and respond to every customer experience in real time.
          </div>

          <div className='footer_menu'>
            <ul>
              <li>What is CX?</li>
              <li>Voice of the Customer (VoC)</li>
              <li>Survey Program Solutions</li>
              <li>Customer Journey Mapping</li>
              <li>Net Promoter Score (NPS)</li>
              <li>CX Key Terms</li>
            </ul>
            <ul>
              <li>Learn</li>
              <li>CX Café</li>
              <li>Product Training</li>
              <li>Events</li>
              <li>Press Releases</li>
            </ul>
            <ul>
              <li>Contact Us</li>
              <li>About</li>
              <li>Careers</li>
              <li>Our Story</li>
              <li>Leave Feedback</li>
            </ul>
          </div>

          <div className='footer_base'>

          </div>
        </div>
      </section>
    );
  }
}


export default Footer;