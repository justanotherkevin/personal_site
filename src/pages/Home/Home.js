import React, { Component } from 'react';
import Socials from '../../components/Socials/Socials';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';

export default class Home extends Component {
  componentDidMount() {
    Splitting();
  }
  render() {
    return (
      <main id="home">
        <section className="content-wrapper">
          <div className="sample" data-splitting="">
            Just another developer
          </div>
          <h1 className="glitch-it" data-splitting="">
            Welcome
          </h1>
        </section>
        <Socials />
      </main>
    );
  }
}
