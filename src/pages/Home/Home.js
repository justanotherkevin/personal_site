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
          {/* <div className="sample" data-splitting="">
            <p>Thanks for stopping by</p>
          </div> */}
          <div className="content-wrapper">
            <div className="content">
              <div className="last-name" />
              <h3>Welcome to Kevin's personal site </h3>
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
