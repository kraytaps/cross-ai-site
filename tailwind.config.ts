import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},

		fontFamily: {
			monument: ["Monument Grotesk", "sans-serif"],
			mono: ["Monument Grotesk Mono", "monospaced"],
		},
		extend: {
			colors: {
				"white-0": "#F0EFFB",
				"white-1": "#E6E4FC",
				"white-2": "#BDB7EB",
				"white-3": "#8B84C9",
				"grey-0": "#908DB1",
				"grey-1": "#2B2940",
				"grey-2": "#181728",
				"black-0": "#1A192E",
				"black-0-hover": "#28263F",
				"black-1": "#080719",
				"purple-0": "#3B2FA7",
				"purple-0-hover": "#221878",
				"purple-1": "#231C63",
				"purple-2": "#15123E",
				"black-bg": "#04030C",
				"purple-pink-grad-0": "#846DCE",
				"purple-pink-grad-1": "#D479F8",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
export default config;
