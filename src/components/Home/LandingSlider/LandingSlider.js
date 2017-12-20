import React, { Component } from 'react';
import './LandingSlider.css';



class LandingSlider extends Component {

  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }
  }


  render() {
    return (
      <section className="landing_slider">

        <div className='landing_slider_content'>
          <div className='landing_slider_results'>Results</div>
          <div className='landing_slider_value'>Unlock the Value of Your Customer Experiences</div>
          <div className='landing_slider_ebook'>DOWNLOAD EBOOK</div>
        </div>

      </section>
    );
  }
}


export default LandingSlider;