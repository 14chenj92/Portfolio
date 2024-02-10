import { React, useState } from "react";
import "../styles/About.css";
import { TypeAnimation } from "react-type-animation";
import arrow from "../images/arrow.svg";
import Avatar from "../images/avatar.jpg";
import Music from "../images/Music.gif";

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Avatar, Music]

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1) % images.length;
    if (currentImageIndex >= 1) {
    setCurrentImageIndex(prevIndex);
    } else {
      ;
    }
  };

  const currentImageSrc = images[currentImageIndex];

  return (
    <div className="aboutMe" id="about">
      <div className="about-left fasthidden">
      <button className="arrow-left"
        onClick={handlePrevImage}>
          <img src={arrow} alt="Arrow" />
        </button>
      <img className="background-image" src={currentImageSrc} alt="Current"/>
        <button className="arrow-right"
        onClick={handleNextImage}>
          <img src={arrow} alt="Arrow" />
        </button>
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          Hello, my name is Jonathan Chen and I am an aspiring web developer
          with a background in business looking for a career field change. I
          love learning new concepts and aim to make a career change in the
          future. I started coding because I loved the idea of creating my own
          projects and I would love to understand the process that goes into
          creating a webpage. I will continue to update my portfolio with the
          new projects I plan to do.
        </p>
        {/* <p>
          I enjoy coding because it allows me to think critically in order to
          solve problems and find creative solutions. I recently completed the
          6-month coding bootcamp through UC Berkeley Extension while working as
          a Sales Associate. I am currently working as a coding instructor who
          teaches Python and Javascript to kids K-12. I am also doing freelance
          in UX design/wordpress.
        </p> */}
      </div>
    </div>
  );
}
