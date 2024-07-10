import ReactStars from "react-rating-stars-component";
import Link from "next/link";

function Product({
  productImage,
  productName,
  productPrice,
  productOldPrice,
  productRate,
  productReviews,
  productId,
}) {
  const ratingChanged = (newRating) => {};

  return (
    <div className="product">
      <Link
        href={`/productdetails/${productId}`}
        className="text-decoration-none"
      >
        <div className="productImage position-relative">
          <div className="d-flex flex-column">
            <span></span>
            <span></span>
          </div>
          <img src={productImage} alt={productName} className="" />
          <div className="addToCartBox position-absolute bg-black  d-flex text-align-center justify-content-center w-100 py-2 ">
            <button className="text-white bg-black w-100 border-0">
              Add to Cart
            </button>
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
