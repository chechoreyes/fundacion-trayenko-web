import type { Config } from 'tailwindcss';
import flowbite from 'flowbite/plugin';

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite-react/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'trayenko-blue': '#00aeeeff',
                'trayenko-green': '#39b647ff',
                'neutral-0': '#FFFFFF',
                'neutral-50': '#f6F7F9',
                'neutral-100': '#EDF0F2',
                'neutral-200': '#E1e5EA',
                'neutral-300': '#d3dbe4',
                'neutral-400': '#c3ceD7',
                'neutral-500': '#b0beCB',
                'neutral-600': '#929fb1',
                'neutral-700': '#606E80',
                'neutral-800': '#404b5a',
                'neutral-900': '#181D25',
                'neutral-1000': '#000000',
                'neutral-dark-0': '#000000',
                'neutral-dark-50': '#14181f',
                'neutral-dark-100': '#1f2633',
                'neutral-dark-200': '#27313f',
                'neutral-dark-300': '#2f3b4c',
                'neutral-dark-400': '#425266',
                'neutral-dark-500': '#627084',
                'neutral-dark-600': '#8a96a3',
                'neutral-dark-700': '#b6bfc9',
                'neutral-dark-800': '#d3d8df',
                'neutral-dark-900': '#edeff3',
                'neutral-dark-1000': '#ffffff',
            },
        },
    },
    plugins: [flowbite],
} satisfies Config;
