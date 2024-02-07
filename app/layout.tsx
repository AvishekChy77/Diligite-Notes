import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diligite Keep",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} container mx-auto px-5 pt-3`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
