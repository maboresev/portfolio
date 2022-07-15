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
      <footer>
        <address className='col-personal-description'>
          <p className='footer-name'>Manuel Borrego Reina</p>
          <p className='footer-profession'>PHP Backend developer</p>
        </address>
        <div className='wrapper-social'>
          <div className='icon github'>
            <div className='tooltip'>Github</div>
            <span><a href="https://github.com/maboresev" target="_blank" id="footer-github"><FontAwesomeIcon icon="fa-brands fa-github" /></a></span>
          </div>
          <div className='icon linkedin'>
            <div className='tooltip'>Linkedin</div>
            <span><a href="https://www.linkedin.com/in/manuel-borrego-reina/" target="_blank" id="footer-linkedin"><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a></span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;