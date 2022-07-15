import React from 'react';
import './sass/footer.scss';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

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
        <div className='wrapper-social'>
          <div className='icon github'>
            <div className='tooltip'>Github</div>
            <span><FontAwesomeIcon icon="fa-brands fa-github" /></span>
          </div>
          <div className='icon linkedin'>
            <div className='tooltip'>Linkedin</div>
            <span><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;