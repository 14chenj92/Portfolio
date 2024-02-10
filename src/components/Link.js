import React from 'react';
import Github from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'
import Stack from '../images/stack.svg'
import '../styles/Footer.css';


function Link() {
    return (
        <>
        <footer>
          <div className="iconFooter">
            <a className="footericon" target="blank" href="https://github.com/14chenj92">
              <img src={Github} className="icon" alt="github" />
              <span className="iconText">GitHub</span>
            </a>
  
            <a className="footericon" target="blank" href="https://www.linkedin.com/">
              <img src={LinkedIn} className="icon" alt="linkedin" />
              <span className="iconText">LinkedIn</span>
            </a>
  
            <a className="footericon" target="blank" href="https://stackoverflow.com/users/21831060/jonathan">
              <img src={Stack} className="icon" alt="stack" />
              <span className="iconText">Stack</span>
            </a>
          </div>
        </footer>
      </>
  );
  }

  export default Link;