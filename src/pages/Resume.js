import React from "react";
import PDF from "../images/Resume Draft.pdf";
import "../styles/Resume.css";
import Skills from "../components/Skills";
import HTML from "../images/icons/html.svg";
import CSS from "../images/icons/css.svg";
import JV from "../images/icons/javascript.svg";
import Bulma from "../images/icons/bulma.svg";
import ReactIcon from "../images/icons/react.svg";
import Bootstrap from "../images/icons/bootstrap.svg";
import Tailwind from "../images/icons/tailwind.svg";
import Vue from "../images/icons/vue.svg";
import Python from "../images/icons/python.svg";
import API from "../images/icons/api.svg";
import Node from "../images/icons/nodejs.svg";
import Express from "../images/icons/express.png";
import mySQL from "../images/icons/mysql.svg";
import mongoDB from "../images/icons/mongodb.svg";
import GraphQL from "../images/icons/graphql.svg";

export default function Resume() {
  return (
    <div id="resume">
      <h1>Resume</h1>
      <h2>
        Download my Resume:{" "}
        <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <a target="blank" href={PDF}>
              Resume
            </a>
          </span>
        </button>
      </h2>
      <div className="skills-container">
        <h2 className="float">
          <span>Front-End Proficiencies:</span>
          <div className="skills-list">
            <Skills img={HTML} skill="HTML" />
            <Skills img={CSS} skill="CSS" />
            <Skills img={JV} skill="JavaScript" />
            <Skills img={ReactIcon} skill="React" />
            <Skills img={Bootstrap} skill="Bootstrap" />
            <Skills img={Tailwind} skill="Tailwind" />
            <Skills img={Vue} skill="Vue" />
            <Skills img={Bulma} skill="Bulma" />
          </div>
        </h2>
        <h2 className="float">
          <span>Back-End Proficiencies:</span>
          <div className="skills-list">
            <Skills img={Python} skill="Python" />
            <Skills img={API} skill="APIs" />
            <Skills img={Node} skill="Node.js" />
            <Skills img={Express} skill="Express.js" />
            <Skills img={mySQL} skill="mySQL" />
            <Skills img={mongoDB} skill="MongoDB" />
            <Skills img={GraphQL} skill="GraphQL" />
          </div>
        </h2>
      </div>
    </div>
  );
}
