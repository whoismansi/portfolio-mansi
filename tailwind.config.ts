import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#f7f5f2',
        'bg-highlight': '#fff',
        'bg-secondary': '#e2dfdb',
        'text-primary': '#4a4846',
        'text-secondary': '#726f6d',
        'text-highlight': '#1f1d1d',
        'border-primary': '#e0deda',
        'gradient-background': '#eceae6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        tight: ['Inter Tight', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23e0deda' stroke-width='1'/%3E%3C/svg%3E")`,
      },
    },
  },
  plugins: [],
};

export default config;
