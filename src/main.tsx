/* eslint-env browser */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import ReactGA from "react-ga4";
import "unfonts.css";
import App from "./app.tsx";
import "./index.scss";

ReactGA.initialize("G-E48LPPQFMR");

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.querySelector("#root")!).render(
	<React.StrictMode>
		<Router>
			<App />
		</Router>
	</React.StrictMode>
);
