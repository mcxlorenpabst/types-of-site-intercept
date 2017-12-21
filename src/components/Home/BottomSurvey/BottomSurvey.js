import React, { Component } from 'react';
import './BottomSurvey.css';

class BottomSurvey extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showIframe: true,
            destroyBottomSurvey: false,
        }

        this.destroyBottomSurvey = this.destroyBottomSurvey.bind(this);
    }

    destroyBottomSurvey(){
        this.setState({
            showIframe: false
        }, () => {
            setTimeout(() => {
                this.setState({
                    destroyBottomSurvey: true
                })
            }, 500)
        })
    }

    render() {
        let frameHeight = this.state.showIframe ? 800 : 0;

        return (
            <section>
                {
                    this.state.destroyBottomSurvey ? 
                        null
                    :   <div className='bottom_survey' style={{height: frameHeight + 'px'}}>
                            <div className='bottom_survey_inner'>
                                <div className='tab_survey_close' onClick={this.destroyBottomSurvey} >X</div>
                                <iframe src='https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=SXWD5F' className='bottom_survey_frame' style={{height: frameHeight + 'px'}} title='surveyFrame' id='surveyFrame' />     
                            </div>
                        </div>
                }
            </section>
        );
    }
}

export default BottomSurvey;