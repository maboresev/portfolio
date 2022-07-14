import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className='row'>
        <address className='col'>
          Jhonny Doe<br/>
          jhonnydoe5468@mypc.com
        </address>
        <ul className='row col'>
          <li className='col'><a href="/">Github</a></li>
          <li className='col'><a href="/food">Linkedin</a></li>
        </ul>
      </footer>
    );
  }
}

export default Footer;