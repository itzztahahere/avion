import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}', // Add MDX if you use it
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Include your components folder
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Include app folder if you're using app directory (Next.js 13+)
  ],
  theme: {
    extend: {
      colors: {
        'dark-primary': '#2A254B', // Fixed color format
        primary: '#4E4D93',
        secondary: '#FF6347', // Custom secondary color
        accent: '#FFD700', // Custom accent color
        neutral: '#2F4F4F', // Custom neutral color
        background: '#F5F5F5', 
        'light-gray': '#F9F9F9',
        'border-gray': '#EBE8F4',
        'border-dark': '#CAC6DA',
        'nav-items-text': '#726E8D'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
