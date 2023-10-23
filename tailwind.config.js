/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"], //'Roboto', sans-serif;
    },
    extend: {
      width: {
        main: "1220px",
      },
      colors: {
        "blue-dam": "#003863",
        "text-hoi-black": "#4A4A4A",
      },
    },
  },
  plugins: ["prettier-plugin-foo"],
};
