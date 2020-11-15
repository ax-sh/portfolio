import React from 'react';

const AboutMe = () => (<div>
  <h1><span>Axmin</span> Shrestha </h1>
  <h2>UI/UX Designer & Full-Stack Developer</h2>
  <p>
    I am a UI/UX Designer & Full Stack Developer (mostly in Python & JavaScript). 
    I've got experience with Python & React, and have also worked on a couple of Flask, Express projects.
  </p>
  <p>
    I like to work on interesting computer projects all the time, and have also created a few other projects on my github.
  </p>
  <p>
    I am available for hire. I've got experience with frameworks like React, TailwindCSS, Flask and few others that I enjoy. 
    If you've got a project in mind, feel free to contact me via email (at the bottom).
  </p>
</div>);

export const About = () => (
  <div id="about">
    <div className="flex-box">

      <div className="center">
        <div className="circle">
          <img src="http://placekitten.com/g/600/600" alt="profile" />
        </div>
      </div>
      <div className="right">
        <AboutMe />
        <div className="skills">
          React,
          {/* <br/> */}
          Git and Gitflow,
          {/* <br/> */}
          Reactjs,
          {/* <br/> */}
          Nextjs,
          {/* <br/> */}
          Bootstrap,
          {/* <br/> */}
          Tailwind,
        </div>
      </div>
    </div>
  </div>
);
