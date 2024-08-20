"use client";
import "../Style/mainstyle.scss";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Script from "next/script";

import store from "@/redux/store/store";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";

{
  /**export const metadata = {
  title: {
    absolute: "",
    default: "Home | Exclusive E-commerce",
    template: "",
  },
  description: "The fully e-commerce website for shopping.",
}; */
}

function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Header />
          {children}
          <Footer />
          <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
        </body>
      </Provider>
    </html>
  );
}
export default appWithTranslation(RootLayout);
