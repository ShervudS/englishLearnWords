import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), alias()],
    resolve: {
        alias: {
            _app: resolve(__dirname, './src/app'),
            _processed: resolve(__dirname, './src/processed'),
            _pages: resolve(__dirname, './src/pages'),
            _widgets: resolve(__dirname, './src/widgets'),
            _features: resolve(__dirname, './src/features'),
            _entities: resolve(__dirname, './src/entities'),
            _shared: resolve(__dirname, './src/shared'),
            _assets: resolve(__dirname, './src/assets'),
            _styles: resolve(__dirname, './src/styles'),
        },
    },
    build: {
        outDir: 'dist',
        minify: 'terser',
        rollupOptions: {
            output: {
                chunkFileNames: '[hash].[ext]',
                // assetFileNames: '',
                entryFileNames: 'js/[hash].js',
            },
        },
        // TODO: Разобраться с хешированием файлов
    },
})
