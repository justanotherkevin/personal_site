import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home.js';
import Projects from './pages/Projects/Projects.js';
import About from './pages/About/About.js';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div id="app">
        <Navbar />
        <TransitionGroup id="transition-group-wrapper">
          <CSSTransition
            key={window.location.pathname}
            classNames="fade"
            timeout={4000}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
              <Route path="/about" component={About} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
