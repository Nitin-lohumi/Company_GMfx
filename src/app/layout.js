import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="ca-pub-4592442373021387" />
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4592442373021387"
          crossorigin="anonymous"
        ></script> */}
      </Head>
      <body>
        <div className="background-overlay"></div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
