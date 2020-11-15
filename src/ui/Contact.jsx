import React from 'react';
// import { ExternalLinks } from './App';

const data = {
  email:'example@example.com',
  cv:"",
  links:{
    Github:"",
    'Linked in':"",
    'Code Sandbox':"",
    Twitter:"",
    Website:"",
    CV:""
  }
}
  
export const ExternalLinks =()=>(
      <div className="links">
          <ul>
              {Object.entries(data.links).map((k, v) => <li key={v}><a target="_blank" href={v}>{k}</a></li>)}
          </ul>
      </div>
) 

export const Contact = () => (
  <div id="contact">
    <ExternalLinks />
    <h1 >
      <a id="email" href={"mailto:"+data.email}>
        {data.email}
      </a>
    </h1>
  </div>
);
