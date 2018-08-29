import React, { Component } from 'react';
import Socials from '../../components/Socials/Socials';

export default class Home extends Component {
  render() {
    return (
      <main id="home">
        <section className="content-wrapper">
          <h1 className="lg-heading">
            John
            <span className="secondary-color"> Doe</span>
          </h1>
          <h4 className="sm-heading">
            Web Developer, Programmer, Designer & Entrepreneur
          </h4>
        </section>
        <Socials />
      </main>
    );
  }
}
