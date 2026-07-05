/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cocoa: "#34271F",
        cocoa2: "#463527",
        camel: "#DDC5A2",
        cream: "#EEE2D1",
        sandalwood: "#EEE2D1",
        amberlux: "#DDC5A2",
        white2: "#FAF9F7",
        charcoal: "#34271F",
        gray2: "#F5EFE6",
        gold: "#B68C45",
        goldLight: "#D4AF77",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
        alt: ["'Poppins'", "sans-serif"],
      },
      backgroundImage: {
        grain: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        luxury: "0 20px 60px -15px rgba(52,39,31,0.20)",
        soft: "0 8px 30px rgba(52,39,31,0.07)",
      },
      transitionTimingFunction: {
        lux: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
}
