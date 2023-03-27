/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        content1: "var(--content1)",
        content2: "var(--content2)",
        content3: "var(--content3)",
        content4: "var(--content4)",
        content5: "var(--content5)",

        background1: "var(--background1)",
        background2: "var(--background2)",
        background3: "var(--background3)",
        background4: "var(--background4)",
        background5: "var(--background5)",

        primary1: "var(--primary1)",
        primary2: "var(--primary2)",
        primary3: "var(--primary3)",
        primary4: "var(--primary4)",
        primary5: "var(--primary5)",
      },
    },
  },
  plugins: [],
};
