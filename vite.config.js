import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
  resolve: {
    alias: {
      '$src': path.resolve(__dirname, './src'),
      '$components': path.resolve(__dirname, './src/components'),
      '$lib': path.resolve(__dirname, './src/lib')
    }
  }
});
