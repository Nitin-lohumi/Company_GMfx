import "./globals.css";
import Footer from "./component/Footer";
import Header from "./component/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4592442373021387" />
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
