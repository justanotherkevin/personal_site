import React, { Component } from 'react';
import Socials from '../../components/Socials/Socials';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import Projects from '../Projects/Projects';
import PreviewRepos from '../../components/PreviewRepos/PreviewRepos';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      activeRepo: { name: '' },
      previewRepos: {
        drumKit: {
          name: 'drumKit',
          link: 'https://polymer940c.github.io/simple-drum/',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547517696/personalSite/drum-kit.png'
        },
        fruitStand: {
          name: 'fruitStand',
          link: 'https://github.com/polymer940c/fruits-shop-react',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547511524/personalSite/fruit-store.png'
        },
        typeWriter: {
          name: 'typeWriter',
          link: 'https://codepen.io/tickle-tickle/pen/GwKRbM',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547310342/personalSite/codepen-typewriter.png'
        },
        ttt: {
          name: 'ttt',
          link: 'https://polymer940c.github.io/TicTacToe/',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547444919/personalSite/TTT.png'
        },
        hightlighterDom: {
          name: 'drumKit',
          link: 'https://polymer940c.github.io/highlighter-dom-ele/',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547536405/personalSite/highlighter.png'
        },
        flexPanels: {
          name: 'flexPanels',
          link: 'https://codepen.io/tickle-tickle/pen/dwrQjR?editors=1100',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547618832/personalSite/flex-panel.png'
        },
        checklistLocalstorage: {
          name: 'checklistLocalstorage',
          link: 'https://polymer940c.github.io/checklist-localstorage/',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547527627/personalSite/checklist-localstorage.png'
        }
      }
    };
  }

  componentDidMount() {
    // const document.queryselect
    // const gridBoxs = [...document.querySelectorAll('.grid-box')];
    // gridBoxs.forEach(gridBox => {
    //   gridBox.onmouseover = this.mouseEnter;
    // });
  }
  setStateActiveRepo = repoName => {
    this.setState({ activeRepo: this.state.previewRepos[repoName] });
  };
  render() {
    const { previewRepos } = this.state;
    return (
      <main id="home">
        <section className="hero-wrapper">
          <div className="content-wrapper">
            <div className="content">
              <div className="last-name" />
            </div>
          </div>
          <div className="grid-wrapper">
            <PreviewRepos
              previewRepos={previewRepos}
              setStateActiveRepo={this.setStateActiveRepo}
            />
          </div>
          <div className="preview-wrapper">
            <div className="preview-container">
              <h3>title</h3>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
