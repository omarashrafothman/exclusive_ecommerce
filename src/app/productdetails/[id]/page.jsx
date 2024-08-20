"use client";
import { Fragment, useState } from "react";
import ReactStars from "react-rating-stars-component";
import CounterInput from "@/Components/inputCounter/CounterInput";
import Image from "next/image";
import delivery from "../../../../public/Assets/Images/icon-delivery.png";
import returnIcon from "../../../../public/Assets/Images/Icon-return.png";
import allProducts from "../../../locals/products.json";
import Head from "next/head";
function page({ params }) {
  const [products, setProducts] = useState(allProducts);
  const ratingChanged = (newRating) => {};
  const [objectDetails, setObjectDetails] = useState(products[params.id - 1]);

  return (
    <Fragment>
      <Head>
        <title>Product Details | Exclusive E-commerce</title>
        <meta
          name="description"
          content="This is a description of product details."
        />

        <meta property="og:description" content="more about this product." />
        <meta name="keywords" content="nextjs, seo, meta tags" />
        <meta property="og:title" content="My Page Title" />

        {/* Add more meta tags as needed */}
      </Head>

      <div className="container ">
        <div className="row py-5">
          <div className="col-12 col-lg-7 ">
            <div className="d-flex gap-2 flex-wrap mainImagesContainer">
              {objectDetails.subImages != "" ? (
                <div className="d-flex flex-column  gap-2 w-25 subImagesBox">
                  {objectDetails.subImages.map((item) => (
                    <div className="subImage w-100">
                      <img src={item.image} alt="productSubImage" />
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}

              <div className="mainProductImage  w-75">
                <img src={objectDetails.productImage} alt="productImage" />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="productDetailsContent">
              <h3 className="">{objectDetails.name}</h3>
              <div className="rateBox d-flex align-items-center">
                <ReactStars
                  count={5}
                  value={objectDetails.rate}
                  edit={false}
                  onChange={ratingChanged}
                  size={20}
                  isHalf={true}
                  activeColor="#FFAD33"
                />
                <span className="mx-3">
                  <p className="m-0 text-secondary ">
                    ({objectDetails.reviews} Reviews)
                  </p>
                </span>
                <div
                  className={
                    objectDetails.inStock
                      ? "isStocked inStock"
                      : "isStocked outStock"
                  }
                >
                  {objectDetails.inStock ? " in Stock" : " out Stock"}
                </div>
              </div>
              <h5 className=" my-2">{objectDetails.price}</h5>
              <p className="m-0 mt-3">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
            </div>
            <div className="">
              <form>
                <span className="d-flex align-items-center my-3">
                  <h6 className="me-2">Colors:</h6>
                  <div class="form-check mx-1">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="color"
                      value="blue"
                      style={{ background: "#A0BCE0" }}
                    />
                  </div>
                  <div class="form-check mx-1">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="color"
                      value="red"
                      style={{ background: "red" }}
                    />
                  </div>
                </span>
                <span className="d-flex align-items-center my-3">
                  <h6 className="me-4">Size:</h6>
                  <div className="d-flex align-items-center justify-content-around w-50 sizesContainer">
                    <label className="containerBlock">
                      <input type="radio" name="radio" />
                      <span className="checkmark">XS</span>
                    </label>
                    <label className="containerBlock">
                      <input type="radio" name="radio" />
                      <span className="checkmark">S</span>
                    </label>
                    <label className="containerBlock">
                      <input type="radio" name="radio" />
                      <span className="checkmark">M</span>
                    </label>
                    <label className="containerBlock">
                      <input type="radio" name="radio" />
                      <span className="checkmark">L</span>
                    </label>
                    <label className="containerBlock">
                      <input type="radio" name="radio" />
                      <span className="checkmark">XL</span>
                    </label>
                  </div>
                </span>

                <div className="d-flex align-items-center justify-content-between my-4 quantityBox">
                  <CounterInput name="quantity" min={1} max={10} />
                  <button
                    className="btn btn-primary text-white buyNow"
                    aria-label="buy now"
                  >
                    Buy Now
                  </button>
                  <div className="favBox">
                    <svg
                      width="18"
                      height="16"
                      viewBox="0 0 18 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 1C2.7912 1 1 2.73964 1 4.88594C1 6.61852 1.7 10.7305 8.5904 14.8873C8.71383 14.961 8.85552 15 9 15C9.14448 15 9.28617 14.961 9.4096 14.8873C16.3 10.7305 17 6.61852 17 4.88594C17 2.73964 15.2088 1 13 1C10.7912 1 9 3.35511 9 3.35511C9 3.35511 7.2088 1 5 1Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </form>
              <div className="deliveryBox d-flex flex-column my-5">
                <div className="deliveryBoxItem d-flex py-4 px-4">
                  <Image src={delivery} alt="delivery" />
                  <span className="d-flex flex-column ms-5">
                    <h6 className="m-0 fw-bold">Free Delivery</h6>
                    <p className="m-0">
                      Enter your postal code for Delivery Availability
                    </p>
                  </span>
                </div>
                <div className=" d-flex py-4 px-4">
                  <Image src={returnIcon} alt="delivery" />
                  <span className="d-flex flex-column ms-5">
                    <h6 className="m-0 fw-bold">Return Delivery </h6>
                    <p className="m-0">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default page;
