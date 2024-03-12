/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					bg: "#181a1b",
					fg: "#e8e6e3",
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
export default tailwindConfig;
