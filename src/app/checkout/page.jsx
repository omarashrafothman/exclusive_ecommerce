import React from "react";
import InputDefault from "../../Components/inputDefault/InputDefault";
function page() {
  return (
    <div className="checkout">
      <div className="container my-4">
        <h4 className="my-5">checkout</h4>
        <div className="row ">
          <div className="col-12 col-lg-6">
            <form className="checkoutForm">
              <InputDefault
                label={"First Name"}
                holder={""}
                type={"text"}
                id={"firstName"}
                required={true}
              />
              <InputDefault
                label={"First Name*"}
                holder={""}
                type={"text"}
                id={"firstName"}
              />
              <InputDefault
                label={"First Name*"}
                holder={""}
                type={"text"}
                id={"firstName"}
              />
              <InputDefault
                label={"First Name*"}
                holder={""}
                type={"text"}
                id={"firstName"}
              />
            </form>
          </div>
          <div className="col-12 col-lg-6">hello2</div>
        </div>
      </div>
    </div>
  );
}

export default page;
