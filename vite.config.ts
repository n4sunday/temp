import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), macrosPlugin()],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: 'interfaces', replacement: path.resolve(__dirname, 'src/interfaces') },
      { find: 'views', replacement: path.resolve(__dirname, 'src/views') },
      { find: 'services', replacement: path.resolve(__dirname, 'src/services') },
      { find: 'stores', replacement: path.resolve(__dirname, 'src/stores') },
      { find: 'styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: 'utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: 'constants', replacement: path.resolve(__dirname, 'src/constants') },
    ],
  },
})
