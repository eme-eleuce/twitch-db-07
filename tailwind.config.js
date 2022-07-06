/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  
  ],
  theme: {
    extend: {

      'animation': {
        'text':'text 8s ease infinite',
    },
    'keyframes': {
        'text': {
            '0%': {
               'background-size':'400% 400%',
                'background-position': '77% 0%'
            },
            '50%': {
               'background-size':'400% 400%',
                'background-position': '24% 100%'
            },
            '100%': {
              'background-size':'400% 400%',
               'background-position': '77% 0%'
           }
        },
    }
    
    },
      screens: {
        sm: '440px',
        // => @media (min-width: 440px) { ... }
  
        md: '768px',
        // => @media (min-width: 768px) { ... }
  
        lg: '1028px',
        // => @media (min-width: 1028px) { ... }
  
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1600px',
        // => @media (min-width: 1600px) { ... }
  
        '3xl': '1800px',
        // => @media (min-width: 1800px) { ... }
    
    },
  },
  plugins: [],
}


