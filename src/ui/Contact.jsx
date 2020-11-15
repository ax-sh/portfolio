import React from 'react';
// import { ExternalLinks } from './App';

const links = {
    Github:"",
    'Linked in':"",
    'Code Sandbox':"",
    Twitter:"",
    Website:"",
  }
  
  export const ExternalLinks =()=>(
      <div className="links">
          <ul>
              {Object.entries(links).map((k, v) => <li key={v}><a target="_blank" href={v}>{k}</a></li>)}
          </ul>
      </div>
  ) 

export const Contact = () => (
  <div id="contact">
    <ExternalLinks />
  </div>
);
