import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='about-section' id='about'>Sobre mí</section>
    );
  }
}

export default About;