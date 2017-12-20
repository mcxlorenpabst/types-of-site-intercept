import React, { Component } from 'react';
import './BottomSurvey.css';

class BottomSurvey extends Component {

  constructor(props){
    super(props);

    this.state = {

    }

  }

  componentDidMount(){
    
  }

  render() {
    return (
      <section className='bottom_survey'>
        <div className='bottom_survey_inner'>
            <p>Did you find what you were looking for?</p>
            <div className='bottom_survey_btns'>
                <div className='btn yes_btn'>Yes</div>
                <div className='btn no_btn'>No</div>
            </div>
        </div>
      </section>
    );
  }
}


export default BottomSurvey;