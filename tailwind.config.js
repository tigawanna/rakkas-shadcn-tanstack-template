/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss-animate"),
    require("daisify-shadcn"),
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#126468",
          "primary-focus": "#08383a",
          "primary-content": "#ffffff",

          secondary: "#514c94",
          "secondary-focus": "#4a62c4",
          "secondary-content": "#ffffff",

          accent: "#856832",
          "accent-focus": "#50390c",
          "accent-content": "#ffffff",

          neutral: "#261230",
          "neutral-focus": "#320a48",
          "neutral-content": "#ffffff",

          "base-100": "#faf7f5",
          "base-200": "#efeae6",
          "base-300": "#e7e2df",
          "base-content": "#261230",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": "1.9rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
        dark: {
          primary: "#17565e",
          "primary-focus": "#18969a",
          "primary-content": "#000000",

          secondary: "#514c94",
          "secondary-focus": "#4a62c4",
          "secondary-content": "#000000",

          accent: "#856832",
          "accent-focus": "#50390c",
          "accent-content": "#000000",

          neutral: "#333333",
          "neutral-focus": "#4d4d4d",
          "neutral-content": "#ffffff",

          "base-100": "#000000",
          "base-200": "#333333",
          "base-300": "#4d4d4d",
          "base-content": "#ffffff",

          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",

          "--rounded-box": "1rem",
          "--rounded-btn": "1.9rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
