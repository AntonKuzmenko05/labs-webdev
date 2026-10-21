import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
    input: {
        main: resolve(import.meta.dirname, 'index.html'),
        about: resolve(import.meta.dirname, 'about.html'),
        contacts: resolve(import.meta.dirname, 'contacts.html'),
    },
    resolve: { alias: { '@': resolve(import.meta.dirname, 'src') } },
    plugins: [
        handlebars({
            partialDirectory: resolve(
                import.meta.dirname,
                'src',
                'partials'
            ),

            context: {
                siteName: 'Лабораторна 6',
                labName: 'Лабораторна № 6',
            },

            reloadOnPartialChange: true,
        }),
    ],
});