/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Digital Agency Theme
        'dark-bg': '#09090b',
        'dark-card': '#121214',
        'dark-elevated': '#18181b',
        'dark-border': 'rgba(255, 255, 255, 0.08)',
        'dark-border-hover': 'rgba(255, 255, 255, 0.22)',
        'muted-text': '#A1A1AA',
        'subtle-text': '#71717A',
        'pure-white': '#FFFFFF',

        // SocialFi / Reference Theme
        'primary-blue': '#063DCE',
        'royal-blue': '#063DCE',
        'deep-navy': '#082A83',
        'neon-lime': '#A6FF00',
        'primary-black': '#080808',
        'soft-grey': '#F3F3F3',
        'secondary-blue': '#174CCF',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        dmsans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        inter: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"DM Sans"', 'system-ui', 'sans-serif'],
        archivo: ['"DM Sans"', 'system-ui', 'sans-serif'],
        manrope: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'glow': '0 0 50px -10px rgba(255, 255, 255, 0.08)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card-hover': '0 20px 45px -10px rgba(0, 15, 60, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06)',
        'button-glow': '0 0 25px rgba(255, 255, 255, 0.2)',

        // Layered Soft Shadows for Containers
        'card-soft': '0 10px 30px -5px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'main-frame': '0 25px 60px -15px rgba(6, 61, 206, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)',
        'nav-container': '0 8px 32px 0 rgba(0, 10, 50, 0.22), 0 1px 2px 0 rgba(255, 255, 255, 0.18) inset',
        'pill-blue': '0 10px 25px -5px rgba(6, 61, 206, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.2) inset',
        'pill-neon': '0 8px 25px -4px rgba(166, 255, 0, 0.5), 0 0 15px rgba(166, 255, 0, 0.3)',
        'bubble-neon': '0 12px 35px -5px rgba(166, 255, 0, 0.45), 0 4px 12px rgba(0, 0, 0, 0.05)',
        'badge-neon': '0 15px 35px -5px rgba(166, 255, 0, 0.4), 0 0 20px rgba(166, 255, 0, 0.2)',
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}
