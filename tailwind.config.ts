import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import daisyui from "daisyui";
// import {forms} from '@tailwindcss/forms'

export default {
  content: [ "./src/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/MainPage/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/Login/*.{js,ts,jsx,tsx,mdx}",
],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '45xl': '16.5rem',
      'zz': '12rem'
    },
    extend: {
      fontFamily: {
         fantany: ["MedievalSharp"],
        fant: ["Kaushan Script"],
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui") ],
} satisfies Config

