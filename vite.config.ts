import solid from 'solid-start/vite';
import { defineConfig } from 'vite';
import node from 'solid-start-node';

export default defineConfig({
	plugins: [solid({ adapter: node({}) })],
});
