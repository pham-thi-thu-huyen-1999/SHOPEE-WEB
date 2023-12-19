import { plugin } from "postcss";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },

        lg: { max: "1023px" },

        md: { max: "767px" },

        sm: { max: "639px" },

        xs: { max: "500px" },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: "#ff4500d9",
        white: "#fff",
        black: "#000000",
      },
      spacing: {
        "1": "1rem", // 16px
        "1.5": "1.5rem", // 24px
        "2": "2rem", // 32px
        "2.5": "2rem", // 40px
        "3": "3rem", // 48px
        "128": "32rem",
        "144": "36rem",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "heading-2": ["3rem", "2.5rem"], // [fontsize, lineHeight]
        "heading-3": ["2.5rem", "2rem"], // [fontsize, lineHeight]
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      containers: {
        "2xs": "16rem",
      },
      // config style container
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          // sm: "600px",
          // md: "728px",
          // lg: "984px",
          xl: "1240px",
          "2xl": "1496px",
        },
      },
    },
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  plugins: [
    // plugin(function({addComponents }){
    //   addComponents ({
    //     '.container': {
    //       max-width: '1024px'
    //     }
    //   })
    // // })
  ],
};
export default config;
