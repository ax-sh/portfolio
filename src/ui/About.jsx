import React from 'react';

const AboutMe = () => (<div>
  <h1>Axmin Shrestha</h1>
  <h2>UI/UX Designer & Front-End Developer</h2>
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
      </div>
    </div>
  </div>
);
