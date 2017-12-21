import React, { Component } from 'react';
import './ModalSurvey.css';

class ModalSurvey extends Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      destroyModal: false,
    }

    this.destroyModal = this.destroyModal.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount(){
    this.mounted = true;
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount(){
    this.mounted = false;
  }

  handleScroll(){
    if (window.pageYOffset > 500 && this.mounted){
      this.setState({
        showModal: true
      })
    }
  }

  destroyModal(){
    this.setState({
      destroyModal: true
    })
  }

  render() {
    return (
      <section>
        {
          !this.state.destroyModal && this.state.showModal ? 
            <div className='modal_survey'>
              <div className='modal'>

                <div className='tab_survey_close' onClick={this.destroyModal} style={{color: "black"}} >X</div>

                <img src='https://www.maritzcx.com/wp-content/themes/allegiance/images/logo.svg' alt='MaritzCX logo' className='modal_header_logo' />

                <p className='modal_words'>Will you help us improve your experience by taking a short 30 second survey?</p>

                <div className='modal_yes_wrapper' onClick={this.destroyModal}>
                  <a className='modal_yes' href='https://alias.allegiancetech.com/cgi-bin/qwebcorporate.dll?idx=SXWD5F' target='_blank' rel="noopener noreferrer">Yes</a>
                </div>

                <p className='modal_words2'>We appreciate your feedback.&nbsp; 
                  <a href="https://www.maritzcx.com/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                </p>

              </div>
            </div>
          : null
        }
      </section>
    );
  }
}


export default ModalSurvey;