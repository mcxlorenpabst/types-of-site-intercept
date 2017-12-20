import React, { Component } from 'react';
import './GreenCX.css';



class GreenCX extends Component {
  render() {
    return (
      <section className="greencx">

        <div className='greencx_inner'>
          <div className='greencx_logo'></div>
          <div className='greencx_value'>Unlock the Value of CX</div>
          <div className='greencx_ebook'>DOWNLOAD THE EBOOK</div>
          <div className='greencx_divider'></div>
          <div className='greencx_circle'>
            <img src='https://maritzcx-decortinteractiv.netdna-ssl.com/wp-content/uploads/2014/10/banner-scroll.png?ix=474' alt='logo' />
          </div>
          <div className='greencx_percent'>150%</div>
          <div className='greencx_nps'>Improvement in NPS over 1 year</div>
          <div className='greencx_video'>WATCH VIDEO</div>
        </div>

      </section>
    );
  }
}


export default GreenCX;