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
        darkBg: '#020617', // Slate 950 (Background Utama)
        cardBg: '#0f172a', // Slate 900 (Background Card)
        sannWhite: '#f8fafc', // Slate 50 (Putih Tua)
        sannBlue: '#2563eb',  // Blue 600 (Biru Utama)
        sannDarkBlue: '#1e3a8a', // Blue 900
        sannViolet: '#7c3aed', // Aksen Violet dikit biar modern
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
