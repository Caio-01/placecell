import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "btn-yellow": "#ece653 ",
        "my-white": "#ECECEC",
        "my-green": "#6ED14C",
        "my-orange": "#FF8845",
        "my-gray": "#9c9c9c",
        "gray-dark": "#292929",
        "gray-light": "#585858",
      },
      fontSize: {
        big: "35rem",
        average: "19rem",
        mobile: "12.5rem",
      },
      fontFamily: {
        paragraph: ["var(--font-rubik)"],
      },
      boxShadow: {
        btn: "0px 7px 15px 0px #ece6533d;",
        img: "15px 35px 19px 0px #0000002b;",
        shape:
          "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(27deg, rgba(88,88,88,0.196516106442577) 50%, rgba(88,88,88,1) 100%)",
      },
      height: {
        half: "47rem",
      },
    },
  },
  plugins: [],
};
export default config;
