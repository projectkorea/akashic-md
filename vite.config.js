import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 요청 도메인: http://localhost:5173/api/hello -> https://random-d.uk/api/hello
      "/api/duck": {
        // 클라가 보낸 요청의 URL이 api로 시작되면 적용
        target: "https://random-d.uk/api/", // 사용할 요청 도메인을 설정
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/duck/, ""), // 프록시 요청의 경로를 재작성
      },
    },
  },
});
