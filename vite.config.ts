import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react({ jsxImportSource: '@emotion/react' })],
	resolve: {
		alias: {
			'@psycron': path.resolve(__dirname, './src'),
		},
	},
});
