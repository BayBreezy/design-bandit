const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: colors.indigo[600],
					...colors.indigo,
				},
			},
			fontFamily: {
				sans: ["Poppins"],
			},
		},
	},
	plugins: [],
};
