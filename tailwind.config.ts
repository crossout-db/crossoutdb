import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // theme: {
  //   extend: {},
  // },
  plugins: [require ("daisyui")],

  daisyui: {
    themes: ["light", "dark", "fantasy", "winter", "aqua" ],
    darkTheme: "dark", // name of one of the included themes for dark mode
  },

} satisfies Config;
