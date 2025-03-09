"use client";
import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
// import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense Script */}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4592442373021387"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </head>
      <body>
        <div className="background-overlay"></div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
