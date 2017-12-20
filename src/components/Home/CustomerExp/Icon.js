import React, { Component } from 'react';

class Icon extends Component {
    render() {
        return (
            <section className='icon_wrapper'>
                <img src={this.props.src} alt={this.props.words} />
                <p>{this.props.words}</p>
            </section>
        );
    }
}

export default Icon;