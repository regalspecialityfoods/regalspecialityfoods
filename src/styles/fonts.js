import { Roboto as MainFont, Chewy as Font1 } from "next/font/google";
// import { Inder as Be_Vietnam_Pro } from "next/font/google";

const mainFont = MainFont({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const font1 = Font1({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: mainFont.className,
  font1: font1.className,
};
export default fonts;
