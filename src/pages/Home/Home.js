import React, { PureComponent } from 'react';
import Socials from '../../components/Socials/Socials';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import Projects from '../Projects/Projects';
import RepoPreview from '../../components/RepoPreview/RepoPreview';
import FooterSidebar from '../../components/Footer-sidebar/FooterSidebar';
import RepoDetailed from '../../components/RepoDetailed/RepoDetailed';

export default class Home extends PureComponent {
  constructor() {
    super();
    this.state = {
      showActiveRepo: false,
      activeRepo: { name: '', title: '', description: '' },
      previewRepos: {
        drumKit: {
          name: 'drumKit',
          title: 'Drum Kit',
          description:
            "Ever wonder if you can smash your keyboard to create some great beats? Me neither, but thanks to some inspiration from the internet I have created this drum (keyboard) simulator. Enjoy smashing those keys and make some weird noises, you're welcome.",
          link: 'https://polymer940c.github.io/simple-drum/',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547517696/personalSite/drum-kit.png'
        },
        fruitStand: {
          name: 'fruitStand',
          title: 'Fruit Stand',
          description:
            'Fruit stand store with a inventory. Single page application to test out React.js. Page is rendered seamlessly with passing state and props functions. Data are kept in an array for persistent data per session. Each item show the name, image, price, and quantity remaining.',
          link: 'https://github.com/polymer940c/fruits-shop-react',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547511524/personalSite/fruit-store.png'
        },
        typeWriter: {
          name: 'typeWriter',
          title: 'Type writer effect',
          description:
            'Have you seen that cool auto text typing effects? Here is a Codepen showing how its done. No plug-in, no unknown functions.',
          link: 'https://codepen.io/tickle-tickle/pen/GwKRbM',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547310342/personalSite/codepen-typewriter.png'
        },
        ttt: {
          name: 'ttt',
          title: 'Tic tac toe',
          description:
            'First complicated algorithm I looked into, min-max. This tic tac toe game can be played against the algorithm. It looks through all possible move then chose the best from the set. ',
          link: 'https://polymer940c.github.io/TicTacToe/',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547444919/personalSite/TTT.png'
        },
        flexPanels: {
          name: 'flexPanels',
          title: 'Flex Panels',
          description:
            'Flexable panels that change their size when you hover over one.',
          link: 'https://codepen.io/tickle-tickle/pen/dwrQjR?editors=1100',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547618832/personalSite/flex-panel.png'
        },
        hightlighterDom: {
          name: 'hightlighterDom',
          title: 'Follow along highlighter',
          description:
            "Ever wonder how Stripe.com made their cool looking nabar? The contents of the dropdown changes but the dropdown container it self doesn't seem to recycled to house the new contents.",
          link: 'https://polymer940c.github.io/highlighter-dom-ele/',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547536405/personalSite/highlighter.png'
        },
        checklistLocalstorage: {
          name: 'checklistLocalstorage',
          title: 'Checklist with local storage',
          description:
            "This is a checklist that remembers. What do I mean? well when you come back to this page, your checklist is still there. No backend, no api call. Using your browser's built in function, it stores the information.",
          link: 'https://polymer940c.github.io/checklist-localstorage/',
          imgSrc:
            'https://res.cloudinary.com/dftsnk497/image/upload/v1547527627/personalSite/checklist-localstorage.png'
        }
      }
    };
  }

  componentDidUpdate() {
    // if (this.state.showActiveRepo === true) {
    //   setTimeout(() => {
    //     this.setState({
    //       showActiveRepo: false,
    //       activeRepo: {}
    //     })
    //   }, 10000);
    // }
  }
  toggleActiveRepo = () => {
    this.setState({ showActiveRepo: !this.state.showActiveRepo })
  }
  setStateActiveRepo = repoName => {
    this.setState({ activeRepo: this.state.previewRepos[repoName] });
  };
  unsetActiveRepo = () => {
    if (!this.state.showActiveRepo) {
      this.setState({ activeRepo: {} })
    }
  }
  render() {
    const {
      previewRepos,
      activeRepo,
      showActiveRepo
    } = this.state;
    return (
      <main id="home">
        <section className={`hero-wrapper ${showActiveRepo ? 'only-active' : ''}`}>
          <FooterSidebar text="Kevin Hu @2019" />

          <RepoPreview
            showActiveRepo={showActiveRepo}
            activeRepo={activeRepo}
            previewRepos={previewRepos}
            setStateActiveRepo={this.setStateActiveRepo}
            unsetActiveRepo={this.unsetActiveRepo}
            toggleActiveRepo={this.toggleActiveRepo}
          />

          <div className={`sample-wrapper ${showActiveRepo ? 'move-in' : ''}`}>
            <div
              className={`sample-container ${activeRepo.title ? 'show' : ''}`}
            >
              {activeRepo.title && <h3>{activeRepo.title}</h3>}
              {activeRepo.description && <p>{activeRepo.description}</p>}
            </div>
          </div>
        </section>
      </main>
    );
  }
}
