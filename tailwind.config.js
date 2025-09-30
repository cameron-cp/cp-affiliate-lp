/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cp: {
          primary: '#22baed',    // Main brand blue
          secondary: '#eb5a41',  // Secondary red/orange
          accent: {
            yellow: '#FBB80D',   // Accent yellow
            gray: '#d2d2d2',     // Accent gray
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Menlo', 'monospace'],
      },
    },
  },
  plugins: [],
}