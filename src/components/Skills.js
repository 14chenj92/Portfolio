import React from 'react'

const Skills = (props) => {
  return (
    <h6 className="skills-box">
    <div className="skills-img">
    <img src ={props.img} alt=""/></div>
    <div className="skill-text">{props.skill}</div>
    </h6>
  )
}

export default Skills;