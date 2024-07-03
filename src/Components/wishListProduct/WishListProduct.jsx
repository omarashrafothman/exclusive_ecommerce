import React from "react";
import Link from "next/link";
import Image from "next/image";
import bin from "../../../public/Assets/Icons/bin.png";
function WishListProduct({
  productImage,
  productName,
  productPrice,
  productOldPrice,
  haveDiscount,
}) {
  return (
    <div className="product position-relative">
      {haveDiscount ? (
        <div className="discountBox bg-primary position-absolute text-white ">
          <p className="m-0">-35%</p>
        </div>
      ) : (
        ""
      )}
      <button className="deleteFromWishList position-absolute">
        <Image src={bin} />
      </button>
      <Link href="#" className="text-decoration-none">
        <div className="productImage productImageWishList  position-relative">
          <Image src={productImage} alt={productName} className="" />
          <div className="addToCartBox2 position-absolute bg-black  d-flex text-align-center justify-content-center w-100 py-2 ">
            <Link
              href="/cart"
              className="text-white text-decoration-none d-flex align-items-center "
            >
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-3"
              >
                <path
                  d="M8.75 20.25C9.16421 20.25 9.5 19.9142 9.5 19.5C9.5 19.0858 9.16421 18.75 8.75 18.75C8.33579 18.75 8 19.0858 8 19.5C8 19.9142 8.33579 20.25 8.75 20.25Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.25 20.25C19.6642 20.25 20 19.9142 20 19.5C20 19.0858 19.6642 18.75 19.25 18.75C18.8358 18.75 18.5 19.0858 18.5 19.5C18.5 19.9142 18.8358 20.25 19.25 20.25Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.75 3.75H5.75L8 16.5H20"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12.5H19.6925C19.7792 12.5001 19.8633 12.4701 19.9304 12.4151C19.9975 12.3601 20.0434 12.2836 20.0605 12.1986L21.4105 5.44859C21.4214 5.39417 21.42 5.338 21.4066 5.28414C21.3931 5.23029 21.3679 5.18009 21.3327 5.13717C21.2975 5.09426 21.2532 5.05969 21.203 5.03597C21.1528 5.01225 21.098 4.99996 21.0425 5H6.5"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="m-0"> Add to Cart</p>
            </Link>
          </div>
        </div>
        <div className="productContent">
          <h4 className="productName fs-5 mt-2 text-black">{productName}</h4>
          <div className="d-flex align-items-center">
            <p className="price text-primary "> ${productPrice}</p>
            <p className="discount text-secondary text-decoration-line-through mx-3">
              {productOldPrice}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default WishListProduct;
