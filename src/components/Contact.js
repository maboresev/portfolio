import React from 'react';
import './sass/contact.scss';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className='contact-section' id='contact'>Contacto</section>
    );
  }
}

export default Contact;