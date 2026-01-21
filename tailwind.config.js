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
        darkBg: '#0B0C10',       // Hitam Pekat
        darkCard: '#1F2833',     // Abu Gelap untuk Card
        neonPurple: '#C5C6C7',   // Abu Terang text
        sannAccent: '#66FCF1',   // Cyan Neon (Aksen)
        sannViolet: '#8b5cf6',   // Ungu sesuai gambar referensi
        sannDarkViolet: '#4c1d95',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
