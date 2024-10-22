import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            colors: {
                green: {
                  DEFAULT: '#277C78',
                },
                yellow: {
                  DEFAULT: '#F2CDAC',
                },
                cyan: {
                  DEFAULT: '#82C9D7',
                },
                navy: {
                  DEFAULT: '#626070',
                },
                red: {
                  DEFAULT: '#C94736',
                },
                purple: {
                  DEFAULT: '#826CB0',
                },
                secondaryPurple: {
                  DEFAULT: '#AF81BA',
                },
                turquoise: {
                  DEFAULT: '#597C7C',
                },
                brown: {
                  DEFAULT: '#93674F',
                },
                magenta: {
                  DEFAULT: '#934F6F',
                },
                blue: {
                  DEFAULT: '#3F82B2',
                },
                navyGrey: {
                  DEFAULT: '#97A0AC',
                },
                armyGreen: {
                  DEFAULT: '#7F9161',
                },
                gold: {
                  DEFAULT: '#CAB361',
                },
                orange: {
                  DEFAULT: '#BE6C49',
                },
                beige: {
                  500: '#98908B',
                  100: '#F8F4F0',
                },
                grey: {
                  900: '#201F24',
                  500: '#696868',
                  300: '#B3B3B3',
                  100: '#F2F2F2',
                },
              },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],
};
