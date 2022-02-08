module.exports = {
    mode: 'jit',
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './markdown-pages/**/*.{mdx, md}',
        './src/**/*.{js,ts,jsx,tsx}'
        // './tmp.js',
        // './tmp/**/*.{js,ts,jsx,tsx}'
        // './src/components/**/*.{js,ts,jsx,tsx}',
        // './src/homepage/**/*.{js,ts,jsx,tsx}',
        // './src/blog/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif']
        },
        extend: {
            fontWeight: {
                light: 300,
                normal: 200,
                medium: 300,
                semibold: 400,
                bold: 500,
                heading: 600
            },
            colors: {
                codeEditorBtn: '#69727C',
                codeEditorBtnBorder: '#4A5058',
                mediumGray: '#252B30',
                seashell: '#F5F6F8',
                gray: '#BEC5C9',
                lightGray: '#4A5057',
                'gray-separator': '#DAE3E9',
                'footer-separator': '#2D3339',
                'gray-light-separator': '#22262b',
                reef: '#5C7080',
                shark: '#1A1E22',
                'hover-shark': 'rgba(26, 30, 34, 0.8)',
                ocean: '#3276EA',
                'hover-ocean': '#CAD7F5',
                lighthouse: '#F66F48',
                lighthouseDarker: '#F3641B',
                'hover-lighthouse': '#F39C82',
                say: '#A4DED0',
                trigger: '#FFE5B4',
                execute: '#B0C4DE',
                prompt: '#E2C7E0',
                fill: '#FEBBAD',
                muddyWhite: '#f5f6f8'
            }
        },
        variants: {
            scrollbar: ['rounded']
        }
    },
    plugins: [require('tailwind-scrollbar')]
};
