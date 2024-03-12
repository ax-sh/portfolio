import React from "react";
import { useRoutes } from "react-router-dom";
import clsx from "clsx";
import routes from "~react-pages";

export function Loader() {
	return <h5 className="prose text-6xl">Loading...</h5>;
}

export function ScreenLoader() {
	return (
		<section className={clsx("animate-ping h-screen", "grid place-content-center")}>
			<Loader />
		</section>
	);
}

function App() {
	return <React.Suspense fallback={<ScreenLoader />}>{useRoutes(routes)}</React.Suspense>;
}

export default App;
