import React, { Component } from 'react';
import Socials from '../../components/Socials/Socials';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import Projects from '../Projects/Projects';

export default class Home extends Component {
  componentDidMount() {
    Splitting();
  }
  render() {
    return (
      <main id="home">
        <section className="hero-wrapper">
          <div className="content-wrapper">
            <div className="content">
              <div className="last-name" />
              {/* <h3>Welcome to Kevin's personal site </h3> */}
            </div>
          </div>
          <div className="grid-wrapper">
            <div className="grid-container">
              <div className="one grid-box" />
              <div className="two grid-box" />
              <div className="three grid-box" />
              <div className="four grid-box" />
              <div className="five grid-box" />
              <div className="six grid-box" />
              <div className="seven grid-box">
                <a
                  href="https://codepen.io/tickle-tickle/pen/GwKRbM"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dftsnk497/image/upload/v1547310342/personalSite/codepen-typewriter.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section>
          <p>this is some intro</p>
          <p>I'm Kevin and here lies some of my work.</p>
          <p>I am a front end developer from New York</p>
        </section>
        <section>
          <p>01. Portfolio</p>
          <Projects />
        </section>
        {/* <h1 className="glitch-it" data-splitting="">
            Welcome
          </h1> */}
        {/* </section> */}
        {/* <Socials /> */}
        <section>
          <p>02. About</p>
          <p>what you want me to say?!</p>
        </section>
        <section>
          <p>03. Contact</p>
        </section>
      </main>
    );
  }
}
