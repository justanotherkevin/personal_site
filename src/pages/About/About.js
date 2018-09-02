import React, { Component } from 'react';
import { TxtType } from '../../scripts/typeWritting';
const testType = () => (
  <h1>
    <a
      href=""
      className="typewrite"
      data-period="10000"
      data-type="[ &quot;Hi, Im Si.&quot;, &quot;I am Creative.&quot;, &quot;I Love Design.&quot;, &quot;I Love to Develop.&quot; ]"
    >
      <span className="wrap" />
    </a>
  </h1>
);
export default class About extends Component {
  componentDidMount() {
    window.onload = function() {
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
    };
  }
  render() {
    return (
      <main id="about">
        {testType()}
        <h1 className="lg-heading">
          About
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <img src="img/portrait.jpg" alt="John Doe" className="bio-image" />

          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
              magni nam nisi quae vitae? Quod molestiae ipsa autem natus eum vel
              ducimus nulla harum voluptatem eligendi! Unde, reiciendis?
              Praesentium, laborum.
            </p>
          </div>

          <div className="job job-1">
            <h3>123 Webshop</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-2">
            <h3>Designers ABC</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>

          <div className="job job-3">
            <h3>Webworks</h3>
            <h6>Graphic Designer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates perferendis totam enim. Nesciunt porro dolores expedita
              dolor necessitatibus deserunt nemo.
            </p>
          </div>
        </div>
      </main>
    );
  }
}
