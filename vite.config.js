import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

export default defineConfig({
  plugins: [
    {
      enforce: 'pre',
      ...mdx({ remarkPlugins: [remarkGfm] }),
    },
    react({
      jsxImportSource: '@emotion/react',
    }),
    svgr({
      include: '**/*.svg?react',
      exclude: '',
    }),
  ],
})
