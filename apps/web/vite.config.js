import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg',
      exclude: '**/*.svg?url',
    }),
  ],
  server: {
    port: 3000,
  },
  // 如果你的项目使用了别名，可以在这里配置
  resolve: {
    alias: {
      // 例如：'@': '/src'
    },
  },
})
