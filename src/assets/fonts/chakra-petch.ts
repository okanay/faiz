import { Chakra_Petch } from "next/font/google";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-chakra",
});

export default chakraPetch;
