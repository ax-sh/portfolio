import * as React from "react";
import styled from "styled-components";
import Section from "./common";

const StyledAbout = styled(Section)``;

export const About = () => (
	<StyledAbout id="about">
		<h1>About (ME)</h1>
	</StyledAbout>
);

export default About;
