/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#07070A",
          900: "#0B0B10",
          800: "#111117",
          700: "#1A1A22",
        },
        gold: {
          DEFAULT: "#E8B44C",
          light: "#F4D48C",
          dark: "#B8862F",
        },
        violet: {
          DEFAULT: "#8B5CF6",
          bright: "#A855F7",
          deep: "#5B21B6",
        },
        bone: "#F3F1EA",
        mute: "#9B9BA8",
      },
      fontFamily: {
        display: ["Unbounded", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        gold: "0 0 40px -8px rgba(232,180,76,0.45)",
        violet: "0 0 50px -10px rgba(139,92,246,0.5)",
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5 },
          "50%": { opacity: 1 },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
