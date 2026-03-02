import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tablet: "834px",
      },
      colors: {
        ink: "#e8e6e3",
        paper: "#0f0f0f",
        cream: "#1a1a1a",
        accent: "#e85c3a",
        muted: "#9a9590",
        border: "#2d2a26",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        fadeUp: "fadeUp 0.8s ease forwards",
        fadeIn: "fadeIn 1s ease forwards",
        heroFadeIn: "heroFadeIn 0.9s ease forwards",
        loaderFadeIn: "loaderFadeIn 0.25s ease forwards",
        "cursor-blink": "cursorBlink 0.7s step-end infinite",
      },
      backgroundImage: {
        "name-gradient": "linear-gradient(135deg, #e85c3a 0%, #c94a2e 50%, #a83d26 100%)",
      },
      keyframes: {
        cursorBlink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        heroFadeIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        loaderFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
