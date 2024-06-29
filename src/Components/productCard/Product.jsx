import React from "react";
import Image from "next/image";

import ReactStars from "react-rating-stars-component";
import Link from "next/link";
import { element } from "prop-types";

function Product({
  productImage,
  productId,
  productName,
  productPrice,
  productOldPrice,
  productRate,
  productReviews,
}) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  console.log(productImage);
  return (
    <div className="product">
      <Link href="#" className="text-decoration-none">
        <div className="productImage position-relative">
          <div className="d-flex flex-column">
            <span></span>
            <span></span>
          </div>
          <img src={productImage} alt={productName} className="" />
          <div className="addToCartBox position-absolute bg-black  d-flex text-align-center justify-content-center w-100 py-2 ">
            <Link href="/cart" className="text-white text-decoration-none">
              Add to Cart
            </Link>
          </div>
        </div>
        <div className="productContent">
          <h4 className="productName fs-5 mt-2 text-black">{productName}</h4>
          <div className="d-flex align-items-center">
            <p className="price text-primary "> ${productPrice}</p>
            <p className="discount text-secondary text-decoration-line-through mx-3">
              ${productOldPrice}
            </p>
          </div>
          <div className="rateBox d-flex align-items-center">
            <ReactStars
              count={5}
              value={productRate}
              edit={false}
              onChange={ratingChanged}
              size={20}
              isHalf={true}
              activeColor="#FFAD33"
            />
            <span className="mx-3">
              <p className="m-0 text-secondary ">({productReviews})</p>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
