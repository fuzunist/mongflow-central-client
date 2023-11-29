import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
      alias: {
          // eslint-disable-next-line no-undef
          '@': path.resolve(__dirname, 'src')
      }
  },
  build: {
    rollupOptions: {
      external: ['store'], // Add 'store' as an external dependency
    },
  },
  optimizeDeps:{
    exclude:["store"]
}
})

