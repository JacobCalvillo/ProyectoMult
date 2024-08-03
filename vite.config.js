import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
    base: 'https://jacobcalvillo.github.io/ProyectoMult/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                earth: resolve(__dirname, 'earth.html'),
            },
        },
    },	
});