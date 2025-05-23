import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [tailwindcss()],
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'app.js',
                assetFileNames: 'styles.[ext]',
            },
        }
    }
})