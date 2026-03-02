import {defineConfig} from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [tailwindcss()],
    // TODO: path aliases — resolve.alias: {'@': '/src'}
    //  Нюансы: jsconfig.json/tsconfig.json paths тоже нужно синхронить,
    //  иначе IDE не резолвит. В рабочих проектах проверить совместимость.
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'app.js',
                assetFileNames: 'styles.[ext]',
            },
        }
    }
})