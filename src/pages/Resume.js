import React from 'react';
import PDF from '../images/Resume Draft.pdf';
import '../styles/Resume.css';
import HTML from '../images/icons/html.svg';
import CSS from '../images/icons/css.svg';
// import JV from '../images/icons/.svg';
import jQuery from '../images/icons/jquery.svg';
import bulma from '../images/icons/bulma.svg';
// import R from '../images/icons/react.svg';
import bootstrap from '../images/icons/bootstrap.svg';

export default function Resume() {
  return (
    <div id="resume">
    <h1>Resume</h1>
      <h2>
      Download my Resume: <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"><a target="blank" href={PDF}>Resume</a></span></button>
      </h2>
      <div className='skills-container'>
      <h2 className="float"><span>Front-End Proficiencies:</span>
      <li className="tech1">HTML <img src ={HTML} alt=""/></li>
      <li className="tech1">CSS <img src ={CSS} alt=""/></li>
      <li className="tech1">JavaScript</li>
      <li className="tech1">jQuery <img src ={jQuery} alt=""/></li>
      <li className="tech1">React </li>
      <li className="tech1">Bootstrap <img src ={bootstrap} alt=""/></li>
      <li className="tech1">Bulma <img src ={bulma} alt=""/></li>
      </h2>
      <h2 className="float"><span>Back-End Proficiencies:</span>
      <li className="tech1">APIs</li>
      <li className="tech1">Node</li>      
      <li className="tech1">Express</li>
      <li className="tech1">mySQL, Sequelize</li>
      <li className="tech1">MongoDB, Mongoose</li>
      <li className="tech1">REST</li>
      <li className="tech1">GraphQL</li>
      </h2>
      </div>
    </div>
  );
}
