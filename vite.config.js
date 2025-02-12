import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
	plugins: [commonjs(), sveltekit()],
	build: {
		commonjsOptions: {
		  transformMixedEsModules: true,
		},
	  },
});
