import React from "react";
import Music from "../images/Music.gif";
import Animal from "../images/Animal.gif";
import Stargazers from "../images/Stargazers.gif";
import StargazersScreen from "../images/stargazers_screen.png";
import AnimalScreen from "../images/login.png";
import Stock from "../images/Stock.gif";
import "../styles/Project.css";
import ProjectCard from "../components/ProjectCard";

export default function Project() {
  return (
    <div id ="project">
      <h1>Projects</h1>
      <ProjectCard
        picture={Stargazers}
        hoverpicture={StargazersScreen}
        title="Stargazers"
        description="Stargazers is a project utilizes the full MERN stack and Astronomy API to explore the night sky via stars, constellations, moon phase calendars and other celestial events."
        app="https://ancient-ravine-85592.herokuapp.com/"
        git="https://github.com/14chenj92/star-grazers"
        lang1="React" color1="cyan"
        lang2="MongoDB"  color2="green"
        lang3="Javascript" color3="yellow"
      />
        <ProjectCard
        picture={Stock}
        hoverpicture={AnimalScreen}
        title="Stock Tracker"
        description="
        Stock Tracker provides a comprehensive snapshot of a stock's performance in the market, offering users an overview, charts, and detailed information. The application integrates with the Finnhub API to ensure accurate data, empowering users with valuable insights into the stock's current status."
        app="https://ancient-ravine-85592.herokuapp.com/"
        git="https://github.com/14chenj92/Stock-Tracker"
        lang1="React" color1="cyan"
        lang2="Tailwind"  color2="blue"
        lang3="Javascript" color3="yellow"
      />
      <ProjectCard
        picture={Animal}
        hoverpicture={AnimalScreen}
        title="Animal Forum"
        description="This is an online community where users can sign in to share images and engage in discussions about their favorite animals. Beyond posting content, members can comment on and like other user's posts."
        app="https://polar-temple-53244.herokuapp.com/login"
        git="https://github.com/14chenj92/Animal-Blog"
        lang1="HTML" color1="red"
        lang2="CSS"  color2="blue"
        lang3="Javascript" color3="yellow"
        lang4="mySQL" color4="geekblue"
      />      
      <ProjectCard
        picture={Music}
        hoverpicture={StargazersScreen}
        title="Music Blog"
        description="I curate a personal music blog where I share my passion for different music genres. I create posts which discuss my favorite albums by my favorite artists, ranging from Korean R&B to Japanese Pop."
        app=""
        git=""
        lang1="Wordpress" color1="cyan"
      />
    </div>
  );
}
