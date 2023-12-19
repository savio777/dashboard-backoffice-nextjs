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
        'grey-500': '#6B7280',
        'grey-600': '#4B5563',
        'grey-700': '#374151',
        'grey-800': '#1F2937',
        'grey-900': '#111827',
        'primary-100': '#FDECCE',
        'primary-200': '#FBD89D',
        'primary-400': '#F7B13C',
        'primary-500': '#F59E0B',
        'primary-600': '#D97706',
        'primary-700': '#A85923',
      },
    },
  },
  plugins: [],
};
export default config;
