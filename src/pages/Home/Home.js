import React, { Component } from 'react';
import Socials from '../../components/Socials/Socials';
const card = () => (
  <div className="card-wrapper">
    <div className="img-wrapper" />
    <div className="content-wrapper">
      <h3>this header</h3>
      <p> this is not the header</p>
    </div>
    <div className="action-wrapper">
      <a href="#">link</a>
    </div>
  </div>
);
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
