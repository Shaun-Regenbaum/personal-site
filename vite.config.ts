import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import staticad from 'solid-start-static';

export default defineConfig({
	plugins: [solid({ adapter: staticad })],
});
