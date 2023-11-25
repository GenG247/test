import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { mdsvex } from 'mdsvex';

/** @type {import('mdsvex').mdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.mdx']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.mdx'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
	adapter: adapter()
	}
}

export default config
