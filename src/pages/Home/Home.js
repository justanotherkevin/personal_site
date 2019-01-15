import React, { Component } from 'react';
import Socials from '../../components/Socials/Socials';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import Projects from '../Projects/Projects';

export default class Home extends Component {
  state = {
    drumKit: {
      link: 'https://polymer940c.github.io/simple-drum/',
      imgSrc:
        'https://res.cloudinary.com/dftsnk497/image/upload/v1547517696/personalSite/drum-kit.png'
    },
    fruitStand: {
      link: 'https://github.com/polymer940c/fruits-shop-react',
      imgSrc:
        'https://res.cloudinary.com/dftsnk497/image/upload/v1547511524/personalSite/fruit-store.png'
    },
    typeWriter: {
      link: 'https://codepen.io/tickle-tickle/pen/GwKRbM',
      imgSrc:
        'https://res.cloudinary.com/dftsnk497/image/upload/v1547310342/personalSite/codepen-typewriter.png'
    },
    ttt: {
      link: 'https://polymer940c.github.io/TicTacToe/',
      imgSrc:
        'https://res.cloudinary.com/dftsnk497/image/upload/v1547444919/personalSite/TTT.png'
    },
    hightlighterDom: {
      link: 'https://polymer940c.github.io/highlighter-dom-ele/',
      imgSrc:
        'https://res.cloudinary.com/dftsnk497/image/upload/v1547536405/personalSite/highlighter.png'
    },
    checklistLocalstorage: {
      link: 'https://polymer940c.github.io/checklist-localstorage/',
      imgSrc:
        'https://res.cloudinary.com/dftsnk497/image/upload/v1547527627/personalSite/checklist-localstorage.png'
    }
  };
  componentDidMount() {
    // Splitting();
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
              <div className="two grid-box">
                <a href={this.state.checklistLocalstorage.link} target="_blank">
                  <img src={this.state.checklistLocalstorage.imgSrc} alt="" />
                </a>
              </div>
              <div className="three grid-box">
                <a href={this.state.ttt.link} target="_blank">
                  <img src={this.state.ttt.imgSrc} alt="" />
                </a>
              </div>
              <div className="four grid-box">
                <a href={this.state.hightlighterDom.link} target="_blank">
                  <img src={this.state.hightlighterDom.imgSrc} alt="" />
                </a>
              </div>
              <div className="five grid-box">
                <a href={this.state.drumKit.link} target="_blank">
                  <img src={this.state.drumKit.imgSrc} alt="" />
                </a>
              </div>
              <div className="six grid-box">
                <a href={this.state.fruitStand.link} target="_blank">
                  <img src={this.state.fruitStand.imgSrc} alt="" />
                </a>
              </div>

              <div className="seven grid-box">
                <a href={this.state.typeWriter.link} target="_blank">
                  <img src={this.state.typeWriter.imgSrc} alt="" />
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
