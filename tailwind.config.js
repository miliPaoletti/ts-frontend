module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          950: "#ff7700",
        },
        gray: {
          950: "#6c6c6c",
        },
        black: {
          900: "black",
          950: "rgba(0, 0, 0, 0.5)",
          960: "rgba(0, 0, 0, 0.3)",
          970: "rgba(0, 0, 0, 0.1)",
        },
      },
      backgroundImage: {
        "about-us": "url(https://i.postimg.cc/nVW9QPbV/158835.jpg)",
        "search-img": "url(/search_img.jpeg)",
      },
    },
  },
  plugins: [],
};
