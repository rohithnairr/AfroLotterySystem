import { Inter } from "next/font/google";
import "./globals.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});


export const metadata = {
  title: "ALS",
  description: "powered by CrowdAfrik",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-black" lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
