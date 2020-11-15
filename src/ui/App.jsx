import React, { useState, useEffect } from 'react';
import '../css/App.scss';

const links = {
  github:"",
  linkedin:"",
  codesandbox:"",
  twitter:"",
  github:"",
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        nav
      </header> */}
      {/* <main> */}
        <div className="contact">
          <div className="links">
            <ul>
              {Object.entries(links).map((k, v)=><li><a href={v}>{k}</a></li>)}
            </ul>
          </div>
        </div>
      {/* </main> */}
    </div>
  );
}

export default App;
