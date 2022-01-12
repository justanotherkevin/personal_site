import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
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
            <Routes>
              <Route exact path="/personal_site/" element={<Home />} />
              <Route path="/personal_site/projects" element={<Projects/>} />
              <Route path="/personal_site/about" element={<About/>} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default App;
