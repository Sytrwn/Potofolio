module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        merahPastel: "#FF8A8A",
        hijauPastel: "#A1D6B2",
        hitamPastel: "#000004",
        putihPastel: "#F2EFE5",
        biruPastel: "#48BEFF",
      },
      fontFamily: {
        freckle: ['"Chewy"', "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
