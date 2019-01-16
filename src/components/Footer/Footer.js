import React, { Component } from 'react';

const socialLinks = () => {
  let links = {
    linkedin: 'https://www.linkedin.com/in/kevin-w-hu/',
    github: 'https://github.com/polymer940c'
  };
  return (
    <section className={'social-wrapper '}>
      <a href="mailto:hu.kevin.w@gmail.com">
        <i className="fa fa-envelope fa-2x" />
      </a>
      <a href={links.linkedin}>
        <i className="fab fa-linkedin fa-2x" />
      </a>
      <a href={links.github}>
        <i className="fab fa-github fa-2x" />
      </a>
    </section>
  );
};

export default class Footer extends Component {
  render() {
    return <section className="footer-nav">{socialLinks()}</section>;
  }
}
