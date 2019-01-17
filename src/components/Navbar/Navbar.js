import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: 0
    };
  }
  handleClick = e => {};
  toggleMenuOpen = e => {
    this.setState({ isMenuOpen: this.state.isMenuOpen === 0 ? 1 : 0 });
  };
  componentDidMount() {
    var navLinks = document.getElementsByClassName('nav-link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', this.toggleMenuOpen, false);
    }
  }
  componentWillUnmount() {
    var navLinks = document.getElementsByClassName('nav-link');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].removeEventListener('click', this.toggleMenuOpen, false);
    }
  }
  render() {
    const toggleShow = this.state.isMenuOpen === 1 ? ' show' : '';
    return (
      <header>
        <div
          className={
            'menu-btn' + (this.state.isMenuOpen === 0 ? ' open' : ' close')
          }
          onClick={this.toggleMenuOpen}
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                How To Reach Me
              </a>
            </li> */}
          </ul>
        </nav>
      </header>
    );
  }
}
