module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            gray: {
                border: '#dbdbdb',
                bg: '#fafafa',
                text: '#c7c7c7',
                dark: '#8e8e8e',
            },
            black: {
                pure: '#000000',
                icon: '#262626',
            },
            blue: '#0095f6',
            red: {
                rose: '#ed4956',
                error: '#ed4956',
            },
            white: '#ffffff',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
