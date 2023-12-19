import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'danger-700': '#B4173A',
        'grey-200': '#E5E7EB',
        'grey-300': '#D1D5DB',
        'grey-700': '#374151',
        'grey-800': '#1F2937',
        'grey-900': '#111827',
        'primary-200': '#FBD89D',
        'primary-400': '#F7B13C',
        'primary-500': '#F59E0B',
        'primary-600': '#D97706',
      },
    },
  },
  plugins: [],
};
export default config;
