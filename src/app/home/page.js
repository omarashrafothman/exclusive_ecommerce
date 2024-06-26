"use client";
import { useEffect } from "react";
import Banner from "../../Components/banner/Banner.jsx";
function page() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <main>
      <div className="container">
        <Banner />
      </div>
    </main>
  );
}

export default page;
