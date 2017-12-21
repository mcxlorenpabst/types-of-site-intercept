import React, { Component } from 'react';
import './TabSurvey.css';

class TabSurvey extends Component {

  constructor(props){
    super(props);

    this.state = {
      hideTabSurvey: true,
      destroyTabSurvey: false,
    }

    this.toggleTabSurvey = this.toggleTabSurvey.bind(this);
    this.destroyTabSurvey = this.destroyTabSurvey.bind(this);
  }

  toggleTabSurvey(){
    this.setState({
      hideTabSurvey: !this.state.hideTabSurvey
    })
  }

  destroyTabSurvey(){
    this.setState({
      destroyTabSurvey: true
    })
  }

  render() {
    let right = this.state.hideTabSurvey ? -800 : 0;
    return (
      <section>
        {
          this.state.destroyTabSurvey ? 
            null
          : <div className='tab_survey' style={{right: right + 'px'}}>
              <div className='feedback_tab' onClick={this.toggleTabSurvey} >Feedback</div>
              <div className='tab_survey_close' onClick={this.destroyTabSurvey} >X</div>
              <iframe src='https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=SXWD5F' title='MaritzCX Survey' className='tab_survey_frame' id='tabSurveyFrame' />
            </div>
        }
      </section>
    );
  }
}


export default TabSurvey;