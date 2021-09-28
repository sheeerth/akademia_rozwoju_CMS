module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                container: '90rem'
            },
            colors: {
                blue: '#3071E6',
                yellow: '#FFC300'
            },
            height: {
                logo: '50px'
            },
            margin: {
                logo: '162px'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
