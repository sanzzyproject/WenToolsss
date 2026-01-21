/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sannWhite: '#f8fafc', // Putih Tua (Slate-50)
        sannBlue: '#1e40af',  // Biru Tua
        sannBlueLight: '#3b82f6', // Biru Terang
      },
    },
  },
  plugins: [],
}
