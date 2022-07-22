const { url } = require('inspector')
const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts}"
    ],
    theme: {
        backgroundImage: {
            'light-base-pattern': "linear-gradient(to bottom, var(from-rgba('#cabad5') via-rgba('#ebe3f5') to-rgba('#f8f6df'))",
        },

        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1440px',
        },

        colors: {
            'lavender-dust': '#ebe3f5',
            'kewpie': '#f9f7df',
            'turquoise': '#5ed1e1',
            'lavender-soap': '#bfc2fe',
            'emo-ballerina': '#e8bddb',
        },

        extend: {
            fontFamily: {
                sans: ['Commissioner', 'sans-serif'],
                mono: ['IBM Plex Mono'],
                display: ['Nightjump'],
                serif: ['Bookish'],
            },
            colors: {
                'lavender-dust': '#ebe3f5',
                'kewpie': '#f9f7df',
                'turquoise': '#5ed1e1',
                'lavender-soap': '#bfc2fe',
                'emo-ballerina': '#e8bddb',
            }
        },

    },
    plugins: [
        plugin(function ({ addBase }) {
            addBase({
                '@font-face': {
                    fontFamily: 'Commissioner',
                    src: url('./src/assets/fonts/Commissioner-Regular.ttf'),
                }
            })
        }),

        plugin(function ({ addBase }) {
            addBase({
                '@font-face': {
                    fontFamily: 'IBM Plex Mono',
                    src: url('./src/assets/fonts/IBMPlexMono-Regular.ttf'),
                }
            })
        }),

        plugin(function ({ addBase }) {
            addBase({
                '@font-face': {
                    fontFamily: 'Nightjump',
                    src: url('./src/assets/fonts/NIGHTJUMP.ttf'),
                }
            })
        }),

        plugin(function({ addBase }){
            addBase({
                '@font-face': {
                    fontFamily: 'Bookish',
                    src: url('./src/assets/fonts/bookish-off-white-regular.ttf'),
                }
            })
        }),

    ],
}
