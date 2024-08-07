import React from "react";
import Link from "next/link";
export const metadata = {
  title: {
    absolute: "",
    default: "404 | Exclusive E-commerce",
    template: "",
  },
  description: "The fully e-commerce website for shopping.",
};

function page() {
  return (
    <div>
      <div className="container d-flex align-items-center justify-content-center flex-column  notfoundPage">
        <h3>404 Not Found</h3>
        <p>Your visited page not found. You may go home page.</p>
        <Link className="btn btn-primary py-3 text-white px-5" href="/">
          Back to home page
        </Link>
      </div>
    </div>
  );
}

export default page;
