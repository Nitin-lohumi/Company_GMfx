"use client";
import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="background-overlay"></div>
        <Header />
        <main>{children}</main>
         <Footer/>
      </body>
    </html>
  );
}
