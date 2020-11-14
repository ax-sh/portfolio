import * as React from "react";
import "../css/App.css";
import styled from 'styled-components'

const AboutMe = ()=><div id='about-me'>
	<h1>Axmin Shrestha</h1>
	<h2>Full Stack Developer</h2>
</div>

const About = styled.div`
/* h1{
	@include .text-6xl
} */
`

const Top = ()=><About>
	<div className="flex-wrap md:flex">
		<div className="w-full md:w-1/3">
			<div className="uppercase">

			<AboutMe/>
			</div>
		</div>
		<div className="w-full md:w-1/3">
			<div className="flex justify-center">
				<div className="bg-gray-100 h-64 w-64 rounded-full"></div>
			</div>
		</div>
		<div className="w-full md:w-1/3">
			<div className="bg-gray-400 h-64 "></div>
		</div>
		
	</div>

</About> 


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
