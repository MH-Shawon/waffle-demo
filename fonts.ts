import { Bai_Jamjuree, Denk_One } from "next/font/google";

// Define the Bai Jamjuree font with various weights
export const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-bai-jamjuree",
});

// Define the Denk One font
export const denkOne = Denk_One({
  subsets: ["latin"],
  weight: "400", // Denk One only comes in weight 400
  display: "swap",
  variable: "--font-denk-one",
});
