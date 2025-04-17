import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    build: {
        outDir: '../', // Replace with the folder name you want
        rollupOptions: {
            input: './index.html', // Specify the entry point
            output: {
                entryFileNames: 'assets/[name].js',
                assetFileNames: info => info.names == 'index.css' ? 'assets/[name].[ext]' : 'assets/[name]-[hash].[ext]', // Keep asset names unchanged
            },
        },
    },
    plugins: [
        tailwindcss(),
    ],
});