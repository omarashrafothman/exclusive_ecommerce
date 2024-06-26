import React from "react";
import "../../Style/Components/Banner.scss";
import apple from "../../Assets/Icons/Apple.png";
import iphone from "../../Assets/Images/hero-bg.png";
import arrowRight from "../../Assets/Icons/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
function Banner() {
  return (
    <section className="banner">
      <div className="row">
        <div className="col-3 categoryBox">
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Woman’s Fashion</li>
          </Link>
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Men’s Fashion</li>
          </Link>
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Electronics</li>
          </Link>
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Home & Lifestyle</li>
          </Link>
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Medicine</li>
          </Link>
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Sports & Outdoor</li>
          </Link>
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Baby’s & Toys</li>
          </Link>
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Groceries & Pets</li>
          </Link>
          <Link href="/home" className="text-decoration-none text-black">
            <li className="categoryItem w-100"> Health & Beauty</li>
          </Link>
        </div>
        <div className="col-9 bannerSliderBox">
          <div className="bannerBox  d-flex align-items-center justify-content-between">
            <div className="bannerContent">
              <div className="d-flex align-items-center">
                <Image src={apple} className="me-3" alt="productImage" />
                <p className="ml-5 text-white mt-4">iPhone 14 Series</p>
              </div>
              <h3 className="fs-1 text-light mt-3">Up to 10% off Voucher</h3>
              <Link href="/home" className="text-white">
                Shop Now
                <Image src={arrowRight} className="mx-3 my-3" />
              </Link>
            </div>
            <div className="bannerImage">
              <Image src={iphone} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
