import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../../components/Socials/Socials';

export default class Footer extends Component {
  render() {
    const url = window.location.pathname;
    return (
      <section className="footer-nav">
        {/* <ul>
          <li>
            <Link
              to="/about"
              className={url === '/about' ? 'secondary-color' : ''}
            >
              Author
            </Link>
          </li>
          <li>
            <Link to="/" className={url === '/' ? 'secondary-color' : ''}>
              Home
            </Link>
          </li>
        </ul> */}
        <Social />
      </section>
    );
  }
}
