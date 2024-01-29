/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {},
		colors: {
			bgmain: "#1b2838",
			tmain: "#ffffff",
		},
	},
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	plugins: [
		{
			tailwindcss: {},
			autoprefixer: {},
		},
	],
};
