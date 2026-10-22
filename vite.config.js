import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import handlebars from 'vite-plugin-handlebars'
import tailwindcss from "@tailwindcss/vite";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
                siteName: 'Лабораторна 6',
                labName: 'Лабораторна № 6',
            },

            reloadOnPartialChange: true,
        }),
    ],
});