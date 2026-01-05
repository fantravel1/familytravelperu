import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        peru: {
          gold: '#D4AF37',
          terracotta: '#E2725B',
          earth: '#8B4513',
          sky: '#87CEEB',
          jungle: '#228B22',
          sand: '#F4E4BC',
          ocean: '#006994',
          sunset: '#FF6B35',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-peru': 'linear-gradient(135deg, #D4AF37 0%, #E2725B 50%, #8B4513 100%)',
        'gradient-andes': 'linear-gradient(180deg, #87CEEB 0%, #FFE4B5 50%, #8B4513 100%)',
      },
    },
  },
  plugins: [],
}
export default config
