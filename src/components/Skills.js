import React from 'react';
import './sass/skills.scss';
import { Link } from 'react-router-dom';

class Skills extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='skills-section' id='skills'>Conocimientos</section>
    );
  }
}

export default Skills;