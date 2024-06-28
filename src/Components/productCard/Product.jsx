import React from "react";
import Image from "next/image";
import joy from "../../Assets/Images/joy.png";
import ReactStars from "react-rating-stars-component";
import Link from "next/link";

function Product() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="product col-12 col-lg-3 my-3">
      <Link href="#" className="text-decoration-none">
        <div className="productImage position-relative">
          <div className="d-flex flex-column">
            <span></span>
            <span></span>
          </div>
          <Image src={joy} />
          <div className="addToCartBox position-absolute bg-black  d-flex text-align-center justify-content-center w-100 py-2 ">
            <Link href="/cart" className="text-white text-decoration-none">
              Add to Cart
            </Link>
          </div>
        </div>
        <div className="productContent">
          <h4 className="productName fs-5 mt-2 text-black">
            HAVIT HV-G92 Gamepad
          </h4>
          <div className="d-flex align-items-center">
            <p className="price text-primary ">$120</p>
            <p className="discount text-secondary text-decoration-line-through mx-3">
              $160
            </p>
          </div>
          <div className="rateBox d-flex align-items-center">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={20}
              isHalf={true}
              activeColor="#FFAD33"
            />
            <span className="mx-3">
              <p className="m-0 text-secondary ">(88)</p>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
