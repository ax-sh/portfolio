import * as React from "react";
import styled from "styled-components";
import Section from "./common";
import data from "../assets/data";

const StyledContact = styled(Section)``;
const Ul = styled.ul`
	list-style-type: none;
	font-size: 20pt;
	text-align: center;
`;

const StyledExternalLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	height: 100vh;
	& a {
		color: #ababab;
		text-transform: lowercase;
		text-decoration: none;
	}
	& a:hover {
		text-transform: uppercase;
		text-decoration: underline;
	}
`;

const ExternalLinks = ({ links }: { links: Array<string> }) => (
	<StyledExternalLinks>
		<Ul>
			{links.map((i) => (
				<li>
					<a href={i}>{new URL(i).host}</a>
				</li>
			))}
		</Ul>
	</StyledExternalLinks>
);

export const Contact = () => (
	<StyledContact id="contact">
		<h1>Contact</h1>
		<ExternalLinks links={data.links} />
	</StyledContact>
);

export default Contact;
