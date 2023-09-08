import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
	postcss: {
		plugins: [
			autoprefixer({})
		]
	}
  },
})