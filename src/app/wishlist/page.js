import WishListProduct from "@/Components/wishListProduct/WishListProduct";
import product2 from "../../../public/Assets/Images/bag.png";
import gpu from "../../../public/Assets/Images/gpu.png";
import goy from "../../../public/Assets/Images/joy2.png";
import jacket from "../../../public/Assets/Images/jacket2.png";
import Products from "../../locals/products.json";
import MainSection from "@/Components/mainSection/mainSection";

function page() {
  return (
    <div>
      <div className="container">
        <div className="wishlistContainer my-5">
          <div className="d-flex align-items-center justify-content-between">
            <h4>Wishlist (4)</h4>
            <button className="btn btn-outline-dark py-3 px-5">
              Move All To Cart
            </button>
          </div>
          <div className="row my-4">
            <div className="col-lg-3 col-12  mb-4">
              <WishListProduct
                productPrice={960}
                productName={"Gucci duffle bag"}
                productImage={product2}
                haveDiscount={true}
                productOldPrice={"$1160"}
              />
            </div>
            <div className="col-lg-3 col-12 mb-4">
              <WishListProduct
                productPrice={1960}
                productName={"RGB liquid CPU Cooler"}
                productImage={gpu}
              />
            </div>
            <div className="col-lg-3 col-12 mb-4">
              <WishListProduct
                productPrice={550}
                productName={"GP11 Shooter USB Gamepad"}
                productImage={goy}
              />
            </div>
            <div className="col-lg-3 col-12 mb-4">
              <WishListProduct
                productPrice={750}
                productName={"Quilted Satin Jacket"}
                productImage={jacket}
              />
            </div>
          </div>
        </div>
        <MainSection
          tittle="Just For You"
          elements={Products}
          haveView={false}
          haveCounter={false}
          isSlider={true}
        />
      </div>
      {/**     <WishListProduct
       productImage={product2}
       productPrice={"20"}
       productName={"GP11 Shooter USB Gamepad"}
     />; */}
    </div>
  );
}

export default page;
