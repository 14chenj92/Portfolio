import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Intro from "../pages/Intro";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";
import Resume from "../pages/Resume";
import Footer from "./Footer";
import Link from "./Link";

export default function PortfolioContainer() {
  return (
    <div>
      <NavTabs/>
      <Intro/>
      <About/>
      <Project/>
      <Resume/>
      <Contact/>
      <Link/>
      <Footer/>
    </div>
  );
}
