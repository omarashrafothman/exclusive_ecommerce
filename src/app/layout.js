import "../Style/mainstyle.scss";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Script from "next/script";

export const metadata = {
  title: {
    absolute: "",
    default: "Home | Exclusive E-commerce",
    template: "",
  },
  description: "The fully e-commerce website for shopping.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  );
}
