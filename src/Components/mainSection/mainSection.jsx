"use client";
import Product from "../productCard/Product";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import arrowRight from "../../../public/Assets/Icons/arrow-left-black.png";
import arrowLeft from "../../../public/Assets/Icons/arrow-right-black.png";

function MainSection({
  elements,
  tittle,
  haveCounter,
  isSlider,
  haveView,
  counter,
  isCategory,
  mainTitle,
}) {
  return (
    <section className="mainSection py-2 w-100 my-3">
      <div className="mainSectionHead my-2">
        <div className="mainSectionName">
          <h3 className="text-primary">{tittle}</h3>
        </div>
        <div className="mainSectionTittleContainer d-flex align-items-center justify-content-between">
          <div className="mainSectionTittle d-flex align-items-center">
            <h4 className="fs-3 ">{mainTitle}</h4>
            <div className="counterContainer mx-5">
              {haveCounter ? counter : ""}
            </div>
          </div>
          <div className="mainSectionTittleArrows d-flex">
            {isSlider ? (
              <div className="swiper-pagination d-flex align-items-center">
                <button
                  className=""
                  id="swiper-button-next"
                  aria-label="go right"
                >
                  <Image src={arrowRight} alt="arrowRight" />
                </button>
                <button
                  className="ms-4"
                  id="swiper-button-prev"
                  aria-label="go left"
                >
                  <Image src={arrowLeft} alt="arrowLeft" />
                </button>

                {/**   <div class="swiper-button-prev">
                </div>
                <div class="swiper-button-next"></div> */}
              </div>
            ) : (
              <button
                className="btn btn-primary text-white"
                aria-label="view all product"
              >
                View All
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mainSectionContent ">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          modules={[Navigation]} // Include the Navigation module
          navigation={{
            nextEl: "#swiper-button-next",
            prevEl: "#swiper-button-prev",
          }} // Configure navigation buttons
          className="mainSectionContent my-5"
        >
          {elements.map((item) => (
            <SwiperSlide className="my-3" key={item.id}>
              <Product
                productName={item.name}
                productId={item.id}
                productPrice={item.price}
                productReviews={item.reviews}
                productRate={item.rate}
                productOldPrice={item.oldPrice}
                productImage={item.productImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {haveView ? (
        <div className="d-flex align-items-center justify-content-center my-5">
          <button
            className="btn btn-primary text-white py-2"
            aria-label="view all product"
          >
            View All Products
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default MainSection;
