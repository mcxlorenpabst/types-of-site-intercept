import React, { Component } from 'react';
import './TabSurvey.css';

class TabSurvey extends Component {

  constructor(props){
    super(props);

    this.state = {
      hideTabSurvey: true
    }

    this.toggleTabSurvey = this.toggleTabSurvey.bind(this);
  }

  toggleTabSurvey(){
    this.setState({
      hideTabSurvey: !this.state.hideTabSurvey
    })
  }

  render() {
    let right = this.state.hideTabSurvey ? -800 : 0;
    return (
      <section className='tab_survey' style={{right: right + 'px'}}>
        <div className='feedback_tab' onClick={this.toggleTabSurvey} >Feedback</div>
        <iframe src='https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?id=SXWD5F' title='MaritzCX Survey' className='tab_survey_frame' id='tabSurveyFrame' />
      </section>
    );
  }
}


export default TabSurvey;