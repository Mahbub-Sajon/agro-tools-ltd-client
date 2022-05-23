module.exports = {
  content: ["./src/**/*.{html,js}"],
    theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#04E2FC",
          secondary: "#03FCB8",
          accent: "#064F3B",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
