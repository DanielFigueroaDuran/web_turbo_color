/** @type {import('tailwindcss').Config} */

const config = {
      content: [
            './app/**/*.{js,ts,jsx,tsx}',
            './pages/**/*.{js,ts,jsx,tsx}',
            './components/**/*.{js,ts,jsx,tsx}'
      ],
      theme: {
            extend: {
                  backgroundImage: {
                        slider: 'linear-gradient(to top, #000 10%, transparent)',
                        thumbnails: 'linear-gradient(to top, #000 2%, transparent)'
                  },
                  keyframes: {
                        showContent: {
                              to: {
                                    transform: 'translateY(0)',
                                    filter: 'blur(0)',
                                    opacity: '1',
                              },
                        },
                  },
                  animation: {
                        'show-content': 'showContent 0.5s 0.7s ease-in-out 1 forwards'
                  },
            },
      },
      plugins: [require('tailwind-animation-delay')],
};

export default config;