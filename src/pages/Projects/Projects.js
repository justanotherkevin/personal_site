import React, { Component } from 'react';

export default class Projects extends Component {
  componentDidMount() {
    // document.getElementsByClassName('project-wrapper').forEach(ele =>
    //   ele.addEventListener('click', () => {
    //     console.log('hello');
    //   })
    // );
  }
  componentWillUnmount() {}
  test(e) {
    // only target div with class project-wrapper
    if (e.target.classList.contains('project-wrapper')) {
      if (e.target.classList.contains('active')) {
        console.log('do nothing');
      } else {
        console.log('add active, remove previous active');
        document
          .querySelector('.project-wrapper.active')
          .classList.remove('active');
        e.target.classList.add('active');
      }
    }
  }
  render() {
    return (
      <main id="projects">
        <section className="content-wrapper">
          <div className="header-wrapper">
            <h1>
              this <span className="secondary-color">header</span>
            </h1>
            <h4>this not header</h4>
          </div>
          <div className="body-wrapper">
            <div className="projects-wrapper" onClick={this.test}>
              <div className="project-wrapper active">
                <h4>1</h4>
                <div className="action-wrapper">
                  <a href="#" className="btn-light">
                    <i className="fas fa-eye" /> Project
                  </a>
                  <a href="#" className="btn-dark">
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
              <div className="project-wrapper">
                <h4>2</h4>
                <div className="action-wrapper">
                  <a href="#" className="btn-light">
                    <i className="fas fa-eye" /> Project
                  </a>
                  <a href="#" className="btn-dark">
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
              <div className="project-wrapper">
                <h4>3</h4>
                <div className="action-wrapper">
                  <a href="#" className="btn-light">
                    <i className="fas fa-eye" /> Project
                  </a>
                  <a href="#" className="btn-dark">
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
              <div className="project-wrapper">
                <h4>4</h4>
                <div className="action-wrapper">
                  <a href="#" className="btn-light">
                    <i className="fas fa-eye" /> Project
                  </a>
                  <a href="#" className="btn-dark">
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
              <div className="project-wrapper">
                <h4>5</h4>
                <div className="action-wrapper">
                  <a href="#" className="btn-light">
                    <i className="fas fa-eye" /> Project
                  </a>
                  <a href="#" className="btn-dark">
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
              <div className="project-wrapper">
                <h4>6</h4>
                <div className="action-wrapper">
                  <a href="#" className="btn-light">
                    <i className="fas fa-eye" /> Project
                  </a>
                  <a href="#" className="btn-dark">
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
              <div className="project-wrapper">
                <h4>7</h4>
                <div className="action-wrapper">
                  <a href="#" className="btn-light">
                    <i className="fas fa-eye" /> Project
                  </a>
                  <a href="#" className="btn-dark">
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
              <div className="project-wrapper">
                <h4>8</h4>
                <div className="action-wrapper">
                  <a href="#" className="btn-light">
                    <i className="fas fa-eye" /> Project
                  </a>
                  <a href="#" className="btn-dark">
                    <i className="fab fa-github" /> Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
