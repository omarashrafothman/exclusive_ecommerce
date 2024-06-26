import Link from "next/link";

import Image from "next/image";
import "../../Style/Components/Header.scss";
import wishlist from "../../Assets/Icons/heart.png";
import cart from "../../Assets/Icons/Cart1.png";
import SearchInput from "../searchInput/SearchInput";
import search from "../../Assets/Icons/search.png";
function Header() {
  return (
    <div className="header  navbar-expand-lg   d-flex flex-column  ">
      <div className="topHeader  navbar nav   bg-black text-light  w-100 d-flex align-items-center justify-content-center">
        <p className="my-0  fs-6 ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="/home" className="mx-2 text-light">
            ShopNow!
          </Link>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg pt-4 bg-white">
        <div className="container">
          <a className="navbar-brand fw-bold " href="/home">
            Exclusive
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/home"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item mx-3">
                <Link class="nav-link" href="/contact">
                  Contact
                </Link>
              </li>

              <li class="nav-item mx-3">
                <Link class="nav-link " href="/about" tabindex="-1">
                  About
                </Link>
              </li>
              <li class="nav-item mx-3">
                <Link class="nav-link " href="/register" tabindex="-1">
                  Sign Up
                </Link>
              </li>
            </ul>
            <form class="d-flex searchAndIcons d-flex align-items-center">
              <SearchInput
                alt={"search"}
                icon={search}
                holder={"What are you looking for?"}
              />
              <span className="wishlistIcon">
                <Image src={wishlist} alt="wishlist" />
              </span>
              <span className="cartIcon">
                <Image src={cart} alt="cart icon" />
              </span>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
