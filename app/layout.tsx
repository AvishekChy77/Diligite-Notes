import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar/Navbar";
import Provider from "./Components/Provider";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Diligite Keep",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Provider>
          <Navbar />
          <div className="pt-5 flex mt-20">
            <Sidebar />
            <div className="sm:mx-16 px-5 w-full">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
