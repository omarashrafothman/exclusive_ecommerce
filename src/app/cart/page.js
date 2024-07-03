import CartTable from "@/Components/cartTable/CartTable";
import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="cart">
      <div className="container">
        <CartTable />

        <div className="d-flex align-items-center justify-content-between my-5  returnBtns">
          <Link className="btn btn-outline-secondary py-3 px-5" href="/">
            Return To Shop
          </Link>
          <button className="btn btn-outline-secondary  py-3 px-5">
            Update Cart
          </button>
        </div>
        <div className="d-flex  justify-content-between my-5 flex-wrap">
          <div className="couponBox d-flex align-items-center col-12 col-lg-6">
            <input
              type="text"
              class="form-control py-2"
              placeholder="Coupon Code"
            />
            <button className="btn btn-primary text-white py-2 ">
              Apply Coupon
            </button>
          </div>
          <div className="cartTotal col-12 col-lg-6 mt-5">
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
              <button className="btn btn-primary py-3 text-white mt-4">
                Procees to checkout
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
