import React from 'react';
import './sass/projects.scss';
import { Link } from 'react-router-dom';

class Projects extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='projects-section' id='projects'>Proyectos</section>
    );
  }
}

export default Projects;