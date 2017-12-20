import React, { Component } from 'react';
import './Home.css';

import Header from './../Header/Header.js';
import LandingSlider from './LandingSlider/LandingSlider.js';
import GreenCX from './GreenCX/GreenCX.js';
import ClientList from './ClientList/ClientList.js';
import Testimony from './Testimony/Testimony.js';
import CustomerExp from './CustomerExp/CustomerExp.js';


class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      userInput: ''
    }

  }

  componentDidMount(){
    //make sure the function is available and that we haven't already added the invite to the DOM
    if (window.mcxAddModal && !document.getElementById('mcxInviteModal')){
      window.mcxAddModal();
    }
  }

  render() {
    return (
      <section className="home">

        <Header />
        <LandingSlider />
        <GreenCX />
        <ClientList />
        <CustomerExp />
        <Testimony />

      </section>
    );
  }
}


export default Home;