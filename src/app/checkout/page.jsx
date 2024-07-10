"use client";
import { useState } from "react";
import InputDefault from "../../Components/inputDefault/InputDefault";
import Image from "next/image";
import toy from "../../../public/Assets/Images/joy.png";
import visa from "../../../public/Assets/Images/visa.png";
import masterCard from "../../../public/Assets/Images/masterCard.png";
import tv from "../../../public/Assets/Images/samsung.png";
function page() {
  const [saved, setSaved] = useState(true);
  const handelsvedChange = () => {
    setSaved(!saved);
  };
  return (
    <div className="checkout">
      <div className="container my-4">
        <h4 className="my-5">Billing Details</h4>
        <div className="row d-flex  justify-content-between  ">
          <div className="col-12 col-lg-5">
            <form className="checkoutForm">
              <InputDefault
                label={"First Name"}
                holder={""}
                type={"text"}
                id={"firstName"}
                required={true}
              />
              <InputDefault
                label={"Company Name"}
                holder={""}
                type={"text"}
                id={"CompanyName"}
              />
              <InputDefault
                label={"Street Address"}
                holder={""}
                type={"text"}
                id={"StreetAddress"}
                required={true}
              />
              <InputDefault
                label={"Apartment, floor, etc. (optional)"}
                holder={""}
                type={"text"}
                id={"Apartment"}
              />
              <InputDefault
                label={"Town/City"}
                holder={""}
                type={"text"}
                id={"firstName"}
                required={true}
              />
              <InputDefault
                label={"Phone Number"}
                holder={""}
                type={"number"}
                id={"phone"}
                required={true}
              />
              <InputDefault
                label={"Email Address"}
                holder={""}
                type={"email"}
                id={"email"}
                required={true}
              />
              <div class="form-check mb-5 mt-3">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="sveData"
                  checked={saved}
                  onChange={handelsvedChange}
                />
                <label class="form-check-label" for="sveData">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-4 placeOrderBOX">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <span className="d-flex align-items-center">
                <div className="productImageCheckOut me-3">
                  <Image src={toy} alt="productImage" className="" />
                </div>
                <p className="m-0">H1 Gamepad</p>
              </span>
              <span>
                <p className="m-0">$650</p>
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
              <span className="d-flex align-items-center">
                <div className="productImageCheckOut me-3">
                  <Image src={tv} alt="productImage" className="tv" />
                </div>
                <p className="m-0">LCD Monitor</p>
              </span>
              <span>
                <p className="m-0">$1100</p>
              </span>
            </div>
            <div className="cartTotal border-0 m-0 w-100 p-0">
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
            </div>
            <form className="my-4">
              <div className="d-flex align-items-center justify-content-between">
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="Billing"
                    id="Bank"
                  />
                  <label class="form-check-label" for="Bank">
                    Bank
                  </label>
                </div>
                <div className="paymentImages d-flex align-items-center justify-content-between">
                  <Image src={visa} alt="visa" className="mx-2" />
                  <Image src={masterCard} alt="masterCard" className="mx-2" />
                </div>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Billing"
                  id="cash"
                />
                <label class="form-check-label" for="cash">
                  Cash on delivery
                </label>
              </div>
              <button className="btn btn-primary py-3 px-5 text-white my-2">
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
