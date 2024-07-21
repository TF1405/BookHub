/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
			},
			colors: {
				primary: '#01221D',
				secondary: '#07BFA5',
				alert: '#FF5D5F',
			},
		},
	},
	plugins: [],
};
