import phone from "../../../public/Assets/Icons/icons-phone.png";
import mail from "../../../public/Assets/Icons/icons-mail.png";
import Image from "next/image";
import Link from "next/link";
import MainInput from "../../Components/mainInput/mainInput.jsx";
import InputDefault from "@/Components/inputDefault/InputDefault";

export const metadata = {
  title: {
    absolute: "",
    default: "Contact | Exclusive E-commerce",
    template: "",
  },
  description: "The fully e-commerce website for shopping.",
};
function Page() {
  return (
    <div className="">
      <div className="container">
        <section className="contact my-5">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="mb-3">
                <span className="d-flex align-items-center mb-3">
                  <Image src={phone} alt="call to us" className="me-2" />
                  <p className="m-0 fw-bold">Call To Us</p>
                </span>
                <div className="d-flex flex-column">
                  <p className="mb-3">We are available 24/7, 7 days a week.</p>
                  <p>
                    Phone: <Link href="">+201552242010</Link>
                  </p>
                </div>
              </div>
              <hr />
              <div className="mb-3">
                <span className="d-flex align-items-center mb-3">
                  <Image src={mail} alt="call to us" className="me-2" />
                  <p className="m-0 fw-bold">Write To US</p>
                </span>
                <div className="d-flex flex-column">
                  <p className="mb-3">
                    Fill out our form and we will contact you within 24 hours.
                  </p>
                  <p>
                    Email:
                    <Link href="mailto:omarothman20002@gmail.com">
                      omarothman20002@gmail.com
                    </Link>
                  </p>
                  <p>
                    Email:
                    <Link href="mailto:omarashrafothman1234@gmail.com">
                      omarashrafothman1234@gmail.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-9 px-5">
              <form className="contact-form">
                <div className="w-100 d-flex align-items-center justify-content-between">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      placeholder="Your Name"
                      name="nameInput"
                    />
                    <label htmlFor="nameInput" className="d-flex">
                      Your Name <p className="text-danger ms-1 m-0">*</p>
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      placeholder="Your Name"
                      name="nameInput"
                    />
                    <label htmlFor="nameInput" className="d-flex">
                      Your Name <p className="text-danger ms-1 m-0">*</p>
                    </label>
                  </div>
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      placeholder="Your Name"
                      name="nameInput"
                    />
                    <label htmlFor="nameInput" className="d-flex">
                      Your Name <p className="text-danger ms-1 m-0">*</p>
                    </label>
                  </div>
                </div>
                <div className="w-100">
                  <textarea
                    className="w-100 mainTextArea"
                    rows={12}
                    placeholder="Your Massage.."
                  ></textarea>
                </div>
                <button className="btn btn-primary py-3 px-5 text-white float-end my-4">
                  Send Massage
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
