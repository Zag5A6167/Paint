import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/Paint/' : '/',
    "homepage": "https://Zag5A6167.github.io/Paint",
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "serve": "vite preview",
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    },
    "dependencies": {
      "react": "^17.0.2",
      "react-dom": "^17.0.2"
    },
    "devDependencies": {
      "vite": "^2.6.4",
      "gh-pages": "^3.2.3"
    }
  };
});
