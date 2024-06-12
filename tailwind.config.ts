import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)"],
        inter: ["var(--font-inter)"],
        chakra: ["var(--font-chakra)"],
      },
    },
  },
  plugins: [],
};
export default config;
