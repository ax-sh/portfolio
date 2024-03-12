import React from "react";
import { useRoutes } from "react-router-dom";
import clsx from "clsx";
import routes from "~react-pages";

export function Loader() {
	return <h5 className="animate-ping prose text-6xl">LOADING...</h5>;
}

export function ScreenLoader() {
	return (
		<section className={clsx("w-dvw h-dvh overflow-hidden", "grid place-content-center")}>
			<Loader />
		</section>
	);
}

function App() {
	return <React.Suspense fallback={<ScreenLoader />}>{useRoutes(routes)}</React.Suspense>;
}

export default App;
