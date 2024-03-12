import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { qrcode } from "vite-plugin-qrcode";
import Pages from "vite-plugin-pages";
import Unfonts from "unplugin-fonts/vite";
import test from "node:test";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/portfolio/",
	plugins: [
		qrcode(),
		react(),
		Pages({ dirs: [{ dir: "src/pages", baseRoute: "/portfolio/" }] }),

		Unfonts({
			// Google Fonts API V2
			google: {
				/**
				 * Enable preconnect link injection
				 *   <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
				 * default: true
				 */
				preconnect: false,

				/**
				 * Values: auto, block, swap(default), fallback, optional
				 * default: 'swap'
				 */
				display: "block",

				/**
				 * Define which characters to load
				 * default: undefined (load all characters)
				 */
				// text: "ViteAwsom",

				/**
				 * Define where the font load tags should be inserted
				 * default: 'head-prepend'
				 *   values: 'head' | 'body' | 'head-prepend' | 'body-prepend'
				 */
				injectTo: "head-prepend",

				/**
				 * Fonts families lists
				 */
				families: [
					// Families can be either strings (only regular 400 will be loaded)
					"Source Sans Pro",

					// Or objects
					{
						/**
						 * Family name (required)
						 */
						name: "Josefin Sans",

						/**
						 * Family styles
						 */
						styles: "wght@400;700",

						/**
						 * Enable non-blocking renderer
						 *   <link rel="preload" href="xxx" as="style" onload="this.rel='stylesheet'">
						 * default: true
						 */
						defer: true,
					},
				],
			},
		}),
	],
	server: { host: true },
});
