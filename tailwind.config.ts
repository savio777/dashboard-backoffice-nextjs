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
        'danger-600': '#E11C48',
        'danger-700': '#B4173A',
        'success-600': '#16A34A',
        'grey-100': '#F3F4F6',
        'grey-200': '#E5E7EB',
        'grey-300': '#D1D5DB',
        'grey-400': '#9CA3AF',
        'grey-500': '#6B7280',
        'grey-600': '#4B5563',
        'grey-700': '#374151',
        'grey-800': '#1F2937',
        'grey-900': '#111827',
        'primary-50': '#FFFBF3',
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
