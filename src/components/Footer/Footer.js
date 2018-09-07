import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <section className="footer-nav">
        <ul>
          <li>
            <Link to="/about">Author</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </section>
    );
  }
}
