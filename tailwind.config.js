/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      base: ["Malgun Gothic","맑은 고딕","굴림","gulim","돋움","dotum","Microsoft", "NeoGothic", "Droid", "sans", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'),],
};