import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stat } from 'fs';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: 0
    };
  }
  handleClick = e => {};
  handelMenuClick = e => {
    this.setState({ isMenuOpen: this.state.isMenuOpen === 0 ? 1 : 0 });
  };
  render() {
    const toggleShow = this.state.isMenuOpen === 1 ? ' show' : '';
    return (
      <header>
        <div
          className={
            'menu-btn' + (this.state.isMenuOpen === 0 ? ' open' : ' close')
          }
          onClick={this.handelMenuClick}
          ref="nav-menu-btn"
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>

        <nav className={'menu' + toggleShow}>
          <div className={'menu-branding' + toggleShow}>
            <div className="portrait" />
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <a href="index.html" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                About Me
              </a>
            </li>
            <li className="nav-item">
              <a href="work.html" className="nav-link">
                My Work
              </a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                How To Reach Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
