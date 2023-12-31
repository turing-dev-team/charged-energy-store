import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "var(--primary-100)",
        "primary-200": "var(--primary-200)",
        "primary-300": "var(--primary-300)",
        "primary-400": "var(--primary-400)",
        "primary-500": "var(--primary-500)",
        "primary-600": "var(--primary-600)",
        "primary-700": "var(--primary-700)",
        "primary-800": "var(--primary-800)",
        "primary-900": "var(--primary-900)",
        "secondary-100": "var(--secondary-100)",
        "secondary-200": "var(--secondary-200)",
        "secondary-300": "var(--secondary-300)",
        "secondary-400": "var(--secondary-400)",
        "secondary-500": "var(--secondary-500)",
        "secondary-600": "var(--secondary-600)",
        "secondary-700": "var(--secondary-700)",
        "secondary-800": "var(--secondary-800)",
        "secondary-900": "var(--secondary-900)",
        "accent-100": "var(--accent-100)",
        "accent-200": "var(--accent-200)",
        "accent-300": "var(--accent-300)",
        "accent-400": "var(--accent-400)",
        "accent-500": "var(--accent-500)",
        "accent-600": "var(--accent-600)",
        "accent-700": "var(--accent-700)",
        "accent-800": "var(--accent-800)",
        "accent-900": "var(--accent-900)",
        "success-100": "var(--success-100)",
        "success-200": "var(--success-200)",
        "success-300": "var(--success-300)",
        "success-400": "var(--success-400)",
        "success-500": "var(--success-500)",
        "success-600": "var(--success-600)",
        "success-700": "var(--success-700)",
        "success-800": "var(--success-800)",
        "success-900": "var(--success-900)",
        "warning-100": "var(--warning-100)",
        "warning-200": "var(--warning-200)",
        "warning-300": "var(--warning-300)",
        "warning-400": "var(--warning-400)",
        "warning-500": "var(--warning-500)",
        "warning-600": "var(--warning-600)",
        "warning-700": "var(--warning-700)",
        "warning-800": "var(--warning-800)",
        "warning-900": "var(--warning-900)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            h1: {
              color: "var(--accent-300)",
              letterSpacing: "0.05em",
            },
            h2: {
              color: "var(--accent-300)",
              letterSpacing: "0.05em",
            },

            p: {
              color: "var(--accent-400)",
            },
            a: {
              "text-decoration": "none",
              color: "var(--accent-400)",
              "&:hover": {
                color: "var(--secondary-200)",
                "border-color": "var(--secondary-200)",
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
}
export default config
