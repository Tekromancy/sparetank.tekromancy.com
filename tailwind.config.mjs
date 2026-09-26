/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				base: '#0B0F17',
				surface: '#111827',
				card: '#162032',
				'border-subtle': '#1F2937',
				'border-hover': '#374151',
				main: '#F9FAFB',
				muted: '#9CA3AF',
				brand: {
					emerald: '#10B981',
					cyan: '#06B6D4',
					orange: '#F59E0B',
					red: '#EF4444',
				}
			},
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			boxShadow: {
				'glow-emerald': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
				'glow-cyan': '0 0 35px -5px rgba(6, 182, 212, 0.25)',
			}
		},
	},
	plugins: [],
}
