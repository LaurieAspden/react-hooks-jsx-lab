import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>I am Laurie, I am learning how to build websites and apps with JavaScript and React. 
      I decided this was going to be my next challenge because I want to work from anywhere in the world, doing what I love. 
      I am ready to develop my skills to the next level, keep learning and evolving. 
    </p>
    <img src={ image } alt="I made this" /> 
  </div>
  }

export default About;
