import React, { Component } from 'react';
import Icon from './Icon.js';
import './CustomerExp.css';

class CustomerExp extends Component {
  render() {
    return (
      <section className="customer_exp">
        <div className='customer_exp_inner'>
          <h1 className='customer_exp_header'>Driving High-Value Customer Experiences</h1>
          <p className='customer_exp_p'>
            We are the world’s full-service customer experience (CX) outcomes partner. Our mission is to provide you with guidance to help you realize your CX goals at every stage; the ability to scale your CX program so you can be flexible; and the insights to take smarter actions that drive real business value, efficiently, and effectively.
          </p>

          <div className='customer_exp_services_container'>
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-surveys-data-collection.png' words='Surveys & Data Collection' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-text-analytics.png' words='Text Analytics' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-dashboards-reporting.png' words='Dashboards & Reporting' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-cx-strategy-design.png' words='CX Strategy & Design' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-vertical-expertise.png' words='Vertical Expertise' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-mystery-shopping.png' words='Mystery Shopping' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-predictive-analytics.png' words='Predictive Analytics' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-action-case-management.png' words='Action & Case Management' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-social-cx.png' words='Social CX' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-advanced-analytics.png' words='Advance Analytics' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-consultative-services.png' words='Consultative Services' />
            <Icon src='https://www.maritzcx.com/wp-content/uploads/2017/03/home-venn-program-management.png' words='Program Management' />
          </div>

        </div>
      </section>
    );
  }
}

export default CustomerExp;