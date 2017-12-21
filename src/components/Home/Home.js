import React, { Component } from 'react';
import './Home.css';

import Header from './Header/Header.js';
import LandingSlider from './LandingSlider/LandingSlider.js';
import GreenCX from './GreenCX/GreenCX.js';
import ClientList from './ClientList/ClientList.js';
import Testimony from './Testimony/Testimony.js';
import CustomerExp from './CustomerExp/CustomerExp.js';
import BottomSurvey from './BottomSurvey/BottomSurvey.js';
import TabSurvey from './TabSurvey/TabSurvey.js';
import ModalSurvey from './ModalSurvey/ModalSurvey.js';
import Footer from './Footer/Footer.js';


class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      userInput: '',
      surveyType: 'modal'
    }

    this.updateSurveyType = this.updateSurveyType.bind(this);
  }

  updateSurveyType(str){
    this.setState({
      surveyType: str
    })
  }

  render() {
    return (
      <section className="home">

        <Header updateSurveyType={this.updateSurveyType} />
        <LandingSlider />
        <GreenCX />
        <ClientList />
        <CustomerExp />
        <Testimony />
        { 
          this.state.surveyType === 'inline' ? 
            <BottomSurvey /> 
          : this.state.surveyType === 'tab' ? 
            <TabSurvey />
          : this.state.surveyType === 'modal' ?
            <ModalSurvey />
          : null
        }
        <Footer />

      </section>
    );
  }
}


export default Home;