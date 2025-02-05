import postcss from 'postcss';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    postcss({
      plugins: [tailwindcss, autoprefixer],
    }),
  ],
};