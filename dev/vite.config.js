import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    build: {
        outDir: '../', // Replace with the folder name you want
    },
    plugins: [
        tailwindcss(),
    ],
});