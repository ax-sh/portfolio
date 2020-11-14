// import * as React from "react";
import styled from "styled-components";

export const Section = styled.section.attrs(() => ({
	className: "section",
}))`
	height: 100vh;
	& h1 {
		text-align: center;
	}
`;

export default Section;
