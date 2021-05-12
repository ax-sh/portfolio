import React from "react";

const Title = "Front-End Developer";
const descriptions = [
  `Hello, Im a Front-End Developer and part Full-Stack Developer(mostly in Python & JavaScript).  I try to design my work based on the aesthetics, usability and simplicity and specialize in Conceptual and Interactive UI Design . `,
  `I've got experience with frameworks like React,
  TailwindCSS, Flask and few others that I enjoy. `, // <p>
  //     I am a UI/UX Designer & Full Stack Develope. I've got experience with Python & React, and have also worked
  //     on a couple of Flask, Express projects.

  //     I like to work on interesting computer projects all the time, and have
  //     also created a few other projects on my github.

  `I am available for hire. If you've got a project in
      mind, feel free to contact me contact details below (at the bottom).`,
];
{
  /* <h2>UI/UX Designer & Full-Stack Developer</h2> */
}
const AboutMe = () => (
  <div>
    <h1>
      <span>Axmin</span> Shrestha
    </h1>

    <h2>{Title}</h2>
    {descriptions.map((description) => (
      <p>{description}</p>
    ))}
  </div>
);

export const About = () => (
  <div id="about">
    <div className="flex-box">
      <div className="center">
        <div className="circle">
          {/* <img src="http://placekitten.com/g/600/600" alt="profile" /> */}
        </div>
      </div>
      <div className="right">
        <AboutMe />
        <div className="skills">
          <h4>Skills</h4>
          Reactjs, Nextjs, Gatsby, Git, Bootstrap, Tailwind, Three.js, D3.js
        </div>
      </div>
    </div>
  </div>
);
