import React, { Component } from 'react';
import './ClientList.css';



class ClientList extends Component {

  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }
  }


  render() {
    return (
      <section className="client_list">
        <ul className='client_list_inner'>
          <img src='https://maritzcx-decortinteractiv.netdna-ssl.com/wp-content/uploads/2014/10/sanofi.png?ix=474' alt='logo' />
          <img src='https://maritzcx-decortinteractiv.netdna-ssl.com/wp-content/uploads/2014/10/reliant.png?ix=474' alt='logo' />
          <img src='https://maritzcx-decortinteractiv.netdna-ssl.com/wp-content/uploads/2014/10/quantas.png?ix=474' alt='logo' />
          <img src='https://maritzcx-decortinteractiv.netdna-ssl.com/wp-content/uploads/2014/10/drager.png?ix=474' alt='logo' />
          <img src='https://maritzcx-decortinteractiv.netdna-ssl.com/wp-content/uploads/2014/10/GM_LOGO.png?ix=474' alt='logo' />
        </ul>
      </section>
    );
  }
}


export default ClientList;