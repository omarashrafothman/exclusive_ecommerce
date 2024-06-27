import { Inter } from "next/font/google";
import "../Style/mainstyle.scss";
// import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
