/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"EB Garamond"', 'serif'],
            },
            colors: {
                pergamino: {
                    light: '#fef3c7', // amarillo pergamino claro
                    dark: '#f5e9c5'   // más cálido, estilo envejecido
                }
            }
        },
    },
    plugins: [],
}
