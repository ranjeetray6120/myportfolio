/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        foreground: "#F8FAFC",
        primary: {
          DEFAULT: "#ADFF2F", // Cyber Lime
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#10B981", // Emerald
          foreground: "#FFFFFF",
        },
        slate: {
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.02)",
          border: "rgba(255, 255, 255, 0.05)",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'brand-gradient': 'linear-gradient(to right, #ADFF2F, #10B981)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
