import React, { Component } from 'react';
import { TxtType } from '../../scripts/typeWritting';
import Projects from '../Projects/Projects';

const testType = () => (
  <h2
    href=""
    className="typewrite"
    data-period="3000"
    data-type="[ &quot;I make stuff with codes.&quot;, &quot;Lots of stuff.&quot;, &quot;Too much stuff.&quot; ]"
  >
    <span className="wrap" />
  </h2>
);
export default class About extends Component {
  componentDidMount() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #000}';
    document.body.appendChild(css);
  }
  render() {
    return (
      <main id="about">
        <section>
          <h1 className="lg-heading">
            About&nbsp;
            <span className="text-secondary">Me</span>
          </h1>
          {testType()}

          <div className="about-info">
            <img
              src="imgs/compressed-profile.jpg"
              alt="John Doe"
              className="bio-image"
            />
          </div>
          {/* <p className="font-5rem">
            Im Kevin, a web developer, a wannabe&nbsp;
            <a href="https://unsplash.com/@chunkymonkey">photographer</a>
          </p> */}
        </section>
        <section>
          <Projects />
        </section>
      </main>
    );
  }
}
