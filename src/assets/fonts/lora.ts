import { Lora } from "next/font/google";

const loraFont = Lora({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-lora",
});

export default loraFont;
