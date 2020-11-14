import * as React from "react";
import styled from "styled-components";
import Section from "./common";

const StyledAbout = styled(Section)`
height:inherit
`;
const AboutWrapper = styled.div.attrs(()=>({className:'flexbox'}))`
/* color: var( --gray-color); */
color: #7a7a7a;
/* background-color:var(--secondary-color); */
/* & { */
  display: flex;
  flex-direction: column;
  /* background: #565656; */
  padding: 5px;
  align-content: space-between;
  /* justify-content: space-between; */
  justify-content:center;
/* } */

&>div {
  text-align: center;
  padding: 20px 0;
  margin: 5px;
}


&>.left {
  text-align:right;
  font-size:16pt
}
/* .flexbox>
.flexbox>.center {
  background-color: #36ABE1;
}
*/
&>.right {
  background-color: #23B776;
} 

@media(min-width:576px) {
  & {
    flex-flow: row wrap;
  }
  &>.left {
    order: 1;
    flex: 0.5;
  }
  &>.right {
    order: 2;
    flex: 0.5;
  }
  &>.center {
    order: 3;
    width: 100%;
  }
  #about{
	  height:inherit
  }
}

@media(min-width:768px) {
  & {
    flex-flow: row nowrap;
  }
  &>div {
    width: 33.33% !important;
  }
  &>.left {
    order: 1;
  }
  &>.center {
    order: 2;
  }
  &>.right {
    order: 3;
  }
}

`

const Img = styled.img`
height:auto;
width:60%;
border-radius:50%;
border:1px solid #000;
box-shadow: #000
`

export const About = () => (
	<StyledAbout id="about">
		{/* <h1>About (ME)</h1> */}
	<AboutWrapper>
		<div className="left">
			<div className='about-me'>
			<h1>Axmin Shrestha</h1>
			<h2>Full Stack Developer</h2>
			<p>
			
			
			This defines the ability for a flex item to grow if necessary. 
			It accepts a unit less value that serves as a proportion. 
			It dictates what amount of the available space inside the flex container the item should take up.
			
			If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. 
			If one of the children has a value of 2, the remaining space would take up twice as much space as the others (or it will try to, at least).
			</p>
			</div>
		</div>
		<div className="center">
			<Img src="https://placekitten.com/g/300/300"/>
		</div>
		<div className="right">3</div>
	</AboutWrapper>
	</StyledAbout>
);

export default About;
