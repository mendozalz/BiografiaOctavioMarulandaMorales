/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily:{
				sans: ["Poppins", "system-ui"],
				cinzel: ["Cinzel"],
				irregardless: ["Irregardless"]
			},
			colors: {
				'verde-claro': '#bbd1d5',
				'verde-medio': '#698084',
				'verde-oscuro': '#064f5e',
				'verde-dark': '#002b37',
				'marron-claro': '#767573',
				'marron-oscuro': '#303030'
			  },
			  maxWidth: {
				'container': '85vw',
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	  ],
}
