import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      // http://localhost:5173/api/duck/random -> https://random-d.uk/api/duck/random
      "/api/duck": { 
        target: "https://random-d.uk/api/",  
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/duck/, ""), // 프록시 요청의 경로를 재작성
      },
    },
  },
});
