import React from "react";
import Image from "next/image";
import delivery from "../../../public/Assets/Icons/delivery.png";
import services from "../../../public/Assets/Icons/Services.png";
import monyback from "../../../public/Assets/Icons/monyBack.png";
function FeatureSection() {
  return (
    <section className="feature row py-5 w-100 my-4">
      <div className="col-12 col-lg-4  d-flex flex-column align-items-center justify-content-center mb-3">
        <Image src={delivery} alt="delivery" className="mb-4" />
        <h5>FREE AND FAST DELIVERY</h5>
        <p className="m-0">Free delivery for all orders over $140</p>
      </div>
      <div className="col-12 col-lg-4  d-flex flex-column align-items-center justify-content-center mb-3">
        <Image src={services} alt="delivery" className="mb-4" />
        <h5>24/7 CUSTOMER SERVICE</h5>
        <p className="m-0">Friendly 24/7 customer support</p>
      </div>
      <div className="col-12 col-lg-4  d-flex flex-column align-items-center justify-content-center mb-3">
        <Image src={monyback} alt="delivery" className="mb-4" />
        <h5>MONEY BACK GUARANTEE</h5>
        <p className="m-0">We reurn money within 30 days</p>
      </div>
    </section>
  );
}

export default FeatureSection;
