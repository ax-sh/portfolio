import * as React from "react";

import "../css/App.css";

const AboutMe = ()=><div id='about-me'>
	<h1>Axmin Shrestha</h1>
	<h2>Full Stack Developer</h2>
</div>

const Top = ()=><div>
	<div className="bg-green-500 fg-teal-500 uppercase text-6xl">
		<AboutMe/>
	</div>
</div> 


export const App = () => (
	<>
		<div id="app">
			<nav className="flex items-center justify-between flex-wrap bg-black-500 p-6">

			</nav>

			<Top/>
		</div>
	</>
);

export default App;
