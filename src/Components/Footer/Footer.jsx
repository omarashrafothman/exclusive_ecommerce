import "../../Style/Components/footer.scss";
import Link from "next/link";
import Image from "next/image";
import qrCode from "../../../public/Assets/Images/Qr Code.png";
import googlePlay from "../../../public/Assets/Images/GooglePlay.png";
import appStore from "../../../public/Assets/Images/AppStore.png";
import facebook from "../../../public/Assets/Icons/facebook.png";
import twitter from "../../../public/Assets/Icons/twitter.png";
import instagram from "../../../public/Assets/Icons/instgram.png";
import linkedIn from "../../../public/Assets/Icons/linkedin.png";
import SearchInput from "../searchInput/SearchInput";
// import telegram from "../../Assets/Icons/telegram.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-white">
        <div className="footerTop  d-flex justify-content-between flex-wrap">
          <div className="footerBox d-flex flex-column  col-12 col-lg-2">
            <h3 className="boxTitle">Exclusive</h3>
            <ul className="m-0">
              <li className="footerLink">
                <Link href="#" className="">
                  Subscribe
                </Link>
              </li>
              <li className="footerLink">
                <Link href="#" className="">
                  Get 10% off your first order
                </Link>
              </li>
              <li className="footerLink">
                <div className="searchAndIcons">
                  <SearchInput
                    // icon={telegram}
                    holder={"Enter your email"}
                    classes={"border border-white bg-transparent "}
                    type={"text"}
                    alt={""}
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className="footerBox d-flex flex-column  col-12 col-lg-2">
            <h3 className="boxTitle">Support</h3>

            <ul className="m-0">
              {" "}
              <li className="footerLink">
                <Link href="#" className="">
                  111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                </Link>
              </li>
              <li className="footerLink">
                <Link href="#" className="">
                  omarothman20002@gmail.com
                </Link>
              </li>
              <li className="footerLink">
                <Link href="#" className="">
                  +201552242010
                </Link>
              </li>
            </ul>
          </div>

          <div className="footerBox d-flex flex-column  col-12 col-lg-2">
            <h3 className="boxTitle">Account</h3>

            <ul className="m-0">
              <li className="footerLink">
                <Link href="/" className="">
                  Account
                </Link>
              </li>
              <li className="footerLink">
                <Link href="/" className="">
                  My Account
                </Link>
              </li>
              <li className="footerLink">
                <Link href="/" className="">
                  Login / Register
                </Link>
              </li>
              <li className="footerLink">
                <Link href="/" className="">
                  Cart
                </Link>
              </li>
              <li className="footerLink">
                <Link href="/" className="">
                  Wishlist
                </Link>
              </li>
              <li className="footerLink">
                <Link href="/" className="">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerBox d-flex flex-column  col-12 col-lg-2">
            <h3 className="boxTitle">Quick Link</h3>

            <ul className="m-0">
              {" "}
              <li className="footerLink">
                <Link href="/" className="">
                  Privacy Policy
                </Link>
              </li>
              <li className="footerLink">
                <Link href="/" className="">
                  Terms Of Use{" "}
                </Link>
              </li>
              <li className="footerLink">
                <Link href="/" className="">
                  FAQ
                </Link>
              </li>
              <li className="footerLink">
                <Link href="/" className="">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerBox d-flex flex-column  col-12 col-lg-2">
            <h3 className="boxTitle">Download App</h3>

            <li className="footerLink">
              <Link href="/" className="">
                Save $3 with App New User Only
              </Link>
            </li>

            <div className="d-flex align-items-center justify-content-evenly ">
              <div>
                <Image src={qrCode} alt="qrCode" />
              </div>
              <div className="d-flex flex-column">
                <Image src={googlePlay} alt="googlePlay" />
                <Image src={appStore} alt="appStore" />
              </div>
            </div>
            <div className="socialLinks d-flex align-items-center justify-content-around my-4">
              <Link href="/home">
                <Image src={facebook} alt="facebook" />
              </Link>
              <Link href="/home">
                <Image src={twitter} alt="twitter" />
              </Link>
              <Link href="/home">
                <Image src={instagram} alt="instagram" />
              </Link>
              <Link href="/home">
                <Image src={linkedIn} alt="linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottom ">
        <p className="m-0">&copy; Copyright Omar 2024. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
