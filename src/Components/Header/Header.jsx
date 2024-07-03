"use client";
import Link from "next/link";
import Image from "next/image";
import "../../Style/Components/Header.scss";
import wishlist from "../../../public/Assets/Icons/heart.png";
import cart from "../../../public/Assets/Icons/Cart1.png";
import SearchInput from "../searchInput/SearchInput";
import search from "../../../public/Assets/Icons/search.png";
import { usePathname } from "next/navigation";
function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/auth/register" },
  ];
  const Pathname = usePathname();
  console.log(Pathname);

  return (
    <div className="header  navbar-expand-lg   d-flex flex-column  ">
      <div className="topHeader  navbar nav   bg-black text-light  w-100 d-flex align-items-center justify-content-center">
        <p className="my-0 ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link href="/" className="mx-2 text-light">
            ShopNow!
          </Link>
        </p>
      </div>
      <nav className="navbar navbar-expand-lg pt-4 bg-white">
        <div className="container">
          <a className="navbar-brand fw-bold " href="/">
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
              {navLinks.map((item) => {
                return (
                  <li className="nav-item mx-3" key={item.name}>
                    <Link
                      className={
                        Pathname == item.href
                          ? "nav-link active text-decoration-underline"
                          : "nav-link"
                      }
                      aria-current="page"
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <form className="d-flex searchAndIcons d-flex align-items-center">
              <SearchInput
                alt={"search"}
                icon={search}
                holder={"What are you looking for?"}
              />

              <Link href="/wishlist">
                <span className="wishlistIcon">
                  <Image src={wishlist} alt="wishlist" />
                </span>
              </Link>
              <Link href="/cart">
                <span className="cartIcon">
                  <Image src={cart} alt="cart icon" />
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
