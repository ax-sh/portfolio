import React from "react";
// import { ExternalLinks } from './App';
import Obfuscate from "react-obfuscate";

const data = {
  email: "example@example.com",
  // cv: "",
  links: {
    Github: "https://github.com/ax-sh",
    LinkedIn: "https://www.linkedin.com/in/axmin/",
    CodeSandbox: "https://codesandbox.io/u/ax-sh",
    Twitter: "https://twitter.com/ax___sh",
    Website: "https://ax-sh.github.io/portfolio/",
    // CV: "",
  },
};

export const ExternalLinks = () => (
  <div className="links">
    <ul>
      {Object.entries(data.links).map(([label, value]) => (
        <li key={label}>
          <Obfuscate target="_blank" href={value}>
            {label}
          </Obfuscate>
        </li>
      ))}
    </ul>
  </div>
);

export const Contact = () => (
  <div id="contact">
    <ExternalLinks />
    {/* <h1>
      <Obfuscate
        email={data.email}
        // headers={{
        //   cc: "kate@acidburn.af",
        //   bcc: "tanderson@metacortex.net",
        //   subject: "react-obfuscate",
        //   body: "Down with the machines!",
        // }}
      />
    </h1> */}
  </div>
);
