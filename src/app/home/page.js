"use client";
import { useEffect } from "react";
import Banner from "../../Components/banner/Banner.jsx";
import Product from "@/Components/productCard/Product.jsx";
function page() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main>
      <div className="container d-flex justify-content-between flex-wrap">
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </main>
  );
}

export default page;
