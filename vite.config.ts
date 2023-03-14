import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		sveltekit(),
		
		// Ensure the `browser` condition is used to load `svelte`
		{
			name: 'vitest-resolve-browser-condition',
			config({ resolve }) {
				resolve.conditions?.unshift('browser');
			}
		}
	],

	test: {
		environment: 'jsdom'
	}
});
