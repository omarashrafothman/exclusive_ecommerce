import React from "react";
import "../../Style/Components/Banner.scss";
import apple from "../../../public/Assets/Icons/Apple.png";
import iphone from "../../../public/Assets/Images/hero-bg.png";
import arrowRight from "../../../public/Assets/Icons/arrow-right.png";
import Image from "next/image";
import Link from "next/link";
function Banner() {
  return (
    <section className="banner">
      <div className="row ">
        <div className="col-12 col-lg-3">
          <nav
            className="categoryBox overflow-x-auto overflow-y-hidden"
            aria-label="categories"
          >
            <ul className="m-0 d-flex flex-row flex-lg-column ps-0">
              <li className="categoryItem w-100">
                <Link
                  href="/home"
                  className="text-decoration-none text-black white-space-nowrap px-2"
                >
                  Woman’s Fashion
                </Link>
              </li>
              <li className="categoryItem w-100">
                <Link
                  href="/home"
                  className="text-decoration-none text-black white-space-nowrap px-2"
                >
                  Men’s Fashion
                </Link>
              </li>
              <li className="categoryItem w-100">
                <Link
                  href="/home"
                  className="text-decoration-none text-black white-space-nowrap px-2"
                >
                  Electronics
                </Link>
              </li>
              <li className="categoryItem w-100">
                <Link
                  href="/home"
                  className="text-decoration-none text-black white-space-nowrap px-2"
                >
                  Home & Lifestyle
                </Link>
              </li>
              <li className="categoryItem w-100">
                <Link
                  href="/home"
                  className="text-decoration-none text-black white-space-nowrap px-2"
                >
                  Medicine
                </Link>
              </li>
              <li className="categoryItem w-100">
                <Link
                  href="/home"
                  className="text-decoration-none text-black white-space-nowrap px-2"
                >
                  Sports & Outdoor
                </Link>
              </li>
              <li className="categoryItem w-100">
                <Link
                  href="/home"
                  className="text-decoration-none text-black white-space-nowrap px-2"
                >
                  Baby’s & Toys
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-12 col-lg-9  bannerSliderBox">
          <div className="bannerBox  d-flex align-items-center  justify-content-between">
            <div className="bannerContent">
              <div className="d-flex align-items-center">
                <Image src={apple} className="me-3" alt="productImage" />
                <p className="ml-5 text-white mt-4">iPhone 14 Series</p>
              </div>
              <h1 className="fs-1 text-light mt-3">Up to 10% off Voucher</h1>
              <Link href="/home" className="text-white">
                Shop Now
                <Image src={arrowRight} className="mx-3 my-3" alt="arrow" />
              </Link>
            </div>
            <div className="bannerImage">
              <Image src={iphone} alt="iphone14" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
