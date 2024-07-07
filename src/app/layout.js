import { Inter } from "next/font/google";
import "../Style/mainstyle.scss";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
import api from "../api/apiInstance";
// import { useLayoutEffect } from "react";
export const metadata = {
  title: {
    absolute: "",
    default: "Home | Exclusive E-commerce",
    template: "",
  },
  description: "The fully e-commerce website for shopping.",
};

{
  /**useLayoutEffect(() => {
  const requestInterceptor = api.interceptors.request.use(
    function (config) {
      const userToken = localStorage.getItem("userToken");
      if (userToken && user) {
        config.headers["Authorization"] = `Bearer ${userToken}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return () => {
    api.interceptors.request.eject(requestInterceptor);
  };
}, [user]); */
}

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
