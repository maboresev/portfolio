import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header>
            <div className="header-menu">
                <nav className='menu-header'>
                    <Link to="#top" className="menu-header-item" id="menu-header-top">Inicio</Link>
                    <Link to="#about"  className="menu-header-item" id="menu-header-about">Sobre mí</Link>
                    <Link to="#skills"  className="menu-header-item" id="menu-header-skills">Conocimientos</Link>
                    <Link to="#projects"  className="menu-header-item" id="menu-header-projects">Proyectos</Link>
                    <Link to="#contact"  className="menu-header-item" id="menu-header-contact">Contacto</Link>
                </nav>
            </div>
      </header>
    );
  }
}

export default Header;