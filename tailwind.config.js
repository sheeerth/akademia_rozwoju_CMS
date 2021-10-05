module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width: {
                container: '90rem',
                box: '59.625rem',
                photo: '205px',
                'offer-box': '200px',
                input: '17rem'
            },
            colors: {
                blue: '#3071E6',
                yellow: '#FFC300'
            },
            height: {
                logo: '50px',
                photo: '205px',
                'offer-box': '200px'
            },
            margin: {
                logo: '162px',
                'about-text': '205px',
            },
            fontSize: {
                h2: '10rem',
                h3: '5rem'
            },
            zIndex: {
                '-1': '-1'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
