import adapter from '@sveltejs/adapter-static';

const isBuild = (process.env.npm_lifecycle_event === "build");

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: { base: isBuild ? '/museum-online' : '' }
	}
};

export default config;