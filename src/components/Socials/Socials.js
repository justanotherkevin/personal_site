import React, { Component } from 'react';
export default class Socials extends Component {
  render() {
    return (
      <section className="social-wrapper">
        <a href="#!">
          <i className="fab fa-twitter fa-2x" />
        </a>
        <a href="#!">
          <i className="fab fa-facebook fa-2x" />
        </a>
        <a href="#!">
          <i className="fab fa-linkedin fa-2x" />
        </a>
        <a href="#!">
          <i className="fab fa-github fa-2x" />
        </a>
      </section>
    );
  }
}
