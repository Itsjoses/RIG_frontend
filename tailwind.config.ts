import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        selectedShadow: "0 1px 2px rgba(0, 0, 0, .3), inset 0 0 0 1px #0090d1",
        tempSelectedShadow:
          "0 1px 2px rgba(0, 0, 0, .3), inset 0 0 0 1px #9e9e9e",
      },
    },
  },
  plugins: [
    function ({ addVariant }: {addVariant: any}) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
export default config;
