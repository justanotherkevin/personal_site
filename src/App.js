import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home.js';
import Projects from './pages/Projects/Projects.js';

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
            timeout={300}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/projects" component={Projects} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}

export default App;
