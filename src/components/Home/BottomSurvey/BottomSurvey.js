import React, { Component } from 'react';
import './BottomSurvey.css';

class BottomSurvey extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showIframe: true
        }

    }

    componentDidMount() {
        window.addEventListener("message", receiveMessage, false);
        
        function receiveMessage(event){
          if (event.origin !== "https://alias.allegiancetech.com")
            return;
            console.log(event);
        }
        let frame = document.getElementById('surveyFrame');
        frame.contentWindow.postMessage('hello', 'http://localhost:3000')
    }

    render() {
            let frameHeight = this.state.showIframe ? 800 : 0;

            return (
                <section className='bottom_survey'>
                    <div className='bottom_survey_inner'>
                        <iframe src='https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=SXWD5F' className='bottom_survey_frame' height={frameHeight} title='surveyFrame' id='surveyFrame' />     
                    </div>
                </section>
            );
        }
    }


    export default BottomSurvey;