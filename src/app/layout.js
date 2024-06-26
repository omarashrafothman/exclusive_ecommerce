"use client";
// import { metadata } from "next";
import { Inter } from "next/font/google";
import "../Style/mainstyle.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
