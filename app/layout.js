import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LENS Corporation | Biometrics & Computer Vision",
  description: "Welcome to LENS Corporation, a leading AI and biometrics company driving innovation at the intersection of technology and identity verification. Discover our cutting-edge solutions utilizing artificial intelligence and biometric technologies to enhance security and streamline authentication processes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        {/* <div className="container mx-auto min-h-[85vh]">
          {children}
        </div> */}
        <Footer />
      </body>
    </html>
  );
}
