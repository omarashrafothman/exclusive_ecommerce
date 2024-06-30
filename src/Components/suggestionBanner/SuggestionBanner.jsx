import Image from "next/image";
import banner from "../../../public/Assets/Images/Frame 600.png";
function SuggestionBanner() {
  return (
    <section className="suggestionBanner w-100 my-5 ">
      <div className="position-relative  w-100">
        <Image
          src={banner}
          alt="suggestion product"
          className="w-100 object-fit-cover"
        />
        <div className="position-absolute suggestionBannerContent ">
          <p className="  green">Categories</p>
          <h4 className="">Enhance Your Music Experience</h4>
          <div className="d-flex align-items-center  justify-content-between mb-4 timer">
            <span className="bg-white text-black d-flex align-items-center justify-content-center flex-column timerElement">
              <p className="m-0 fw-bold">23</p>
              <p className="m-0"> Hours</p>
            </span>
            <span className="bg-white text-black d-flex align-items-center justify-content-center flex-column timerElement">
              <p className="m-0 fw-bold">05</p>
              <p className="m-0">Days</p>
            </span>
            <span className="bg-white text-black d-flex align-items-center justify-content-center flex-column timerElement">
              <p className="m-0 fw-bold">59</p>
              <p className="m-0">Min</p>
            </span>
            <span className="bg-white text-black d-flex align-items-center justify-content-center flex-column timerElement">
              <p className="m-0 fw-bold">35</p>
              <p className="m-0">Sec</p>
            </span>
          </div>
          <button className="btn   text-white">Buy Now!</button>
        </div>
      </div>
    </section>
  );
}

export default SuggestionBanner;
