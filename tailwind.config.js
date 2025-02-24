/** @type {import('tailwindcss').Config} */
import { createThemes } from 'tw-colors'

export const mode = 'jit'
export const content = ["./templates/**/*.{html,htm}"]
export const theme = {
  extend: {
    // fontFamily: {
    //   // sans: ['Inter', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    //   // mono: ['Fira Code', 'monospace'],
    // }
    fontFamily: {
      // For headings, titles
      headings: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
      // For general body text
      sans: ['Roboto', 'sans-serif'],
      // For code blocks and editor
      mono: ['Fira Code', 'Courier New', 'Courier', 'monospace'],
    },
  },
}
export const plugins = [
  require('tailwind-scrollbar'),
  require('@tailwindcss/typography'),
  "prettier-plugin-tailwindcss",
  createThemes({
    default: {
      'primary': '#1d2d44',
      'secondary': '#0d1321',
      'background': '#f1faee',
      'text': '#ffffff',
      'nav': "#0d1321",
      'button': '#e88f36'
    }
  }),
]

