import CartTable from "@/Components/cartTable/CartTable";
import Link from "next/link";

export const metadata = {
  title: {
    absolute: "",
    default: "Cart | Exclusive E-commerce",
    template: "",
  },
  description: "The fully e-commerce website for shopping.",
};

function page() {
  return (
    <div className="cart">
      <div className="container">
        <CartTable />

        <div className="d-flex align-items-center justify-content-between my-5 flex-wrap  returnBtns">
          <Link className="btn btn-outline-dark py-3 px-5" href="/">
            Return To Shop
          </Link>
          <button
            className="btn btn-outline-dark  py-3 px-5"
            aria-label="update cart"
          >
            Update Cart
          </button>
        </div>
        <div className="d-flex  justify-content-between my-5 flex-wrap">
       {/*   <div className="couponBox d-flex align-items-center   col-12 col-lg-6">
            <input
              type="text"
              class="form-control py-2"
              placeholder="Coupon Code"
            />
            <button
              className="btn btn-primary text-white py-2 "
              aria-label="apply coupon"
            >
              Apply Coupon
            </button>
          </div>*/}
          <div className="cartTotal col-12 col-lg-4 mt-5">
            <h5>Cart Total</h5>
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0">Subtotal:</p>
              <p className="m-0">$1750</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0">Shipping:</p>
              <p className="m-0">Free</p>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="m-0">Total:</p>
              <p className="m-0">$1750</p>
            </div>
            <span className="d-flex align-items-center justify-content-center">
              <Link
                href="/checkout"
                className="btn btn-primary py-3 text-white mt-4"
              >
                Procees to checkout
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
