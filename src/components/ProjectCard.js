import React, { useState } from "react";
import "../styles/Project.css";
import { Tag } from "antd";

function ProjectCard(props) {
  const [isHovered, setIsHovered] = useState(false);

  // const transitionImg = {
  //   opacity: isHovered ? 0 : 1,
  //   transition: 'opacity 0.5s ease-in-out',
  // };

  return (
    <div className="project-card">
      <div className="project-left">
        <img
          className="project-img"
          src={isHovered ? props.hoverpicture : props.picture}
          alt=""
          onMouseOver={() => setIsHovered(true)}
          onMouseOut={() => setIsHovered(false)}
        />
        <div className="lang-box">
          Made with: &nbsp;
          <span>
            {props.color1 && props.lang1 && (
              <Tag color={props.color1}>{props.lang1}</Tag>
            )}
            {props.color2 && props.lang2 && (
              <Tag color={props.color2}>{props.lang2}</Tag>
            )}
            {props.color3 && props.lang3 && (
              <Tag color={props.color3}>{props.lang3}</Tag>
            )}
            {props.color4 && props.lang4 && (
              <Tag color={props.color4}>{props.lang4}</Tag>
            )}
          </span>
        </div>
      </div>
      <div className="project-right">
        <h2>{props.title}</h2>
        <div className="project-desc">
          <p>{props.description}</p>
        </div>
        <a href={props.app} target="_blank" rel="noopener noreferrer">
          <button class="relative inline-flex items-center justify-center p-0.5 mt-5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Demo
            </span>
          </button>
        </a>
        <a href={props.git} target="_blank" rel="noopener noreferrer">
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Github
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
