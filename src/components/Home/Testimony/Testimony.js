import React, { Component } from 'react';
import './Testimony.css';



class Testimony extends Component {

  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }
  }


  render() {
    return (
      <section className="testimony">
        <div className='testimony_inner'>
          <img src='https://www.maritzcx.com/wp-content/uploads/2014/10/customers-quote.png' alt='quotes' className='quotes_img' />
          <p className='testimony_words'>
            Qantas differentiates itself by delivering exceptional customer experiences. Through the MaritzCX platform we’re able to listen and learn form our customers, enabling us to tailor products and services that drive continued loyalty.
          </p>
          <div className='testimony_logo_container'>
            <img src='https://www.maritzcx.com/wp-content/uploads/2014/10/qantas-white1.png' alt='qantas logo' />
            <p>Qantas Airways</p>
          </div>
        </div>
      </section>
    );
  }
}


export default Testimony;