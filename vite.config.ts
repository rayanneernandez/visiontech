import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  base: '/visiontech/',  
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
