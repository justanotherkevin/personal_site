import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <TransitionGroup>
            <CSSTransition
              key={window.location.pathname}
              classNames="fade"
              timeout={300}
            >
              <Switch>
                <Route exact path="/" component={Header} />
                <Route path="/test" component={Home} />
                {/* <Route path="/schedule" component={Schedule} /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </main>
      </div>
    );
  }
}

export default App;
