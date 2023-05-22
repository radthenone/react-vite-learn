import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: './envs/.env' });

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      'assets': resolve(__dirname, '/assets'),
      'components': resolve(__dirname, '/components'),
      'context': resolve(__dirname, '/context'),
      'data': resolve(__dirname, '/data'),
      'features': resolve(__dirname, '/features'),
      'layouts': resolve(__dirname, '/layouts'),
      'lib': resolve(__dirname, '/lib'),
      'pages': resolve(__dirname, '/pages'),
      'services': resolve(__dirname, '/services'),
      'utils': resolve(__dirname, '/utils'),
    },
  },
  server: {
    watch: {
        usePolling: true
    },
    host: process.env.HOST.toString() || '0.0.0.0',
    port: parseInt(process.env.PORT || '5143', 10),
  }
})
