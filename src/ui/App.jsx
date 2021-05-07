import React from "react";
import "../css/App.scss";
import { About } from "./About";
import { Contact } from "./Contact";
import { Work } from "./Work";

import { Header } from "./Header";

const App = () => {
  return (
    <div id="App">
      <Header />
      <main>
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  );
};

export default App;
