import React from 'react';
import './AuthFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const AuthFooter = () => {
  return (
    <footer className='AuthFooter'>
      <div className="footer-social">
        <a href="https://github.com/cgreen66" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/in/christophergreenn" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="social-icon" />
        </a>
      </div>
      <p>© 1996-2024, Amasphere.com, Inc. or its affiliates</p>
    </footer>
  );
};

export default AuthFooter;
