import * as React from "react";
import styled from "styled-components";
import Section from "./common";
import data from "../assets/data";
// import * as QRCode from 'qrcode.react';
var QRCode = require('qrcode.react');
// import profileImg from "../profile-img.webp";
// import profileImg from "../assets/profile-img.webp";


const StyledContact = styled(Section)``;
const Ul = styled.ul`
	list-style-type: none;
	font-size: 20pt;
	text-align: left;
	* { border-box: box-sizing; }
	& li{
		// display:inline-block;
		// vertical-align: top;
		line-height:40pt;

		position:relative;
	}
`;

const StyledExternalLinks = styled.div`
	& a {
		position:relative;
		// text-transform: lowercase;
		text-transform: uppercase;
		text-decoration: none;
	}
	& a:hover {
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


const Img = styled.img`
height:40vh;
width:40vh;
// clip-path: polygon(50% 100%, 0 0, 100% 0);
background-color:white
`

const MyQrCode = styled.div`
height:160pt;
width:160pt;
background-image:url("${process.env.PUBLIC_URL}/QRcode.svg");
background-color:#fff
`

export const Contact = () => (
	<StyledContact id="contact">
		<h1>Contact</h1>
		<div className="wrapper">
			{/* <Img src={process.env.PUBLIC_URL + '/QRcode.svg'}/> */}
			{/* <Img src={process.env.PUBLIC_URL + '/QRcode.svg'}/> */}
			{/* <Img src='profile-img.webp'/> */}
			<QRCode 
			includeMargin={'true'} 
			bgColor="#222"
			fgColor="#fff"
			size="160" value={data.site} />
			<MyQrCode/>
			<ExternalLinks  links={data.links} />

		</div>
	</StyledContact>
);

export default Contact;
