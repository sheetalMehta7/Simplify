/** @type {import('tailwindcss').Config} */

import flowbitePlugin from "flowbite/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  darkMode: "class", // or 'media' if you prefer
  theme: {
    extend: {
      colors: {
        primary: '#0f172a', // Darker background color
        secondary: '#1e293b', // Slightly lighter background for contrast
        accent: '#3b82f6', // Bright accent color (buttons, highlights)
        textPrimary: '#e2e8f0', // Light text color
        textSecondary: '#94a3b8', // Muted text color for secondary content
      },
    },
  },
  animation: {
    'fade-in': 'fadeIn 2s ease-in-out',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
  },
  backgroundImage: {
    'hero-pattern': "url('/path-to-your-background-image.jpg')",
    'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
  },

  plugins: [flowbitePlugin],
};
