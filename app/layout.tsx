import type { Metadata } from "next";
import "./globals.css";
import "./css/layout.css"
import NavBar from "./components/NavBar";
import Link from "next/link";
import { Bebas_Neue, DM_Sans } from 'next/font/google';
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "FORZA - Gym & Wellness",
  description: "Created by Matteo Granchelli",
};
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${bebas.variable} ${dmSans.variable}`}>
        <header className="mainHeader">
          <div className="mainHeaderContainer">
            <Link href="/" className="logo">FOR<span>Z</span>A</Link>
            <NavBar />
            <div className="profile">MG</div>
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
