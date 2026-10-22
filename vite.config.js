import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import handlebars from 'vite-plugin-handlebars'
import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
    input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        contacts: resolve(import.meta.dirname, 'contacts.html'),
    },
    resolve: { alias: { '@': resolve(import.meta.dirname, 'src') } },
    plugins: [
        tailwindcss(),
        handlebars({
            partialDirectory: resolve(
                import.meta.dirname,
                'src',
                'partials'
            ),

            context: {
                siteName: 'Лабораторна 7',
                labName: 'Лабораторна № 7',
            },

            reloadOnPartialChange: true,
        }),
    ],
});