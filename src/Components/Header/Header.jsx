"use client";
import Link from "next/link";
import Image from "next/image";
import "../../Style/Components/Header.scss";
import wishlist from "../../../public/Assets/Icons/heart.png";
import cart from "../../../public/Assets/Icons/Cart1.png";
import SearchInput from "../searchInput/SearchInput";
import search from "../../../public/Assets/Icons/search.png";
import { usePathname } from "next/navigation";
import avatar from "../../../public/Assets/Images/persons/linked in avatar.png";
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import { useState } from "react";
function Header() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
    { name: "Sign Up", href: "/auth/register" },
  ];
  const Pathname = usePathname();

  const [menuShow, setMenuShow] = useState(false);
  const [authanticated, setAuth] = useState(true);
  const handlingShow = () => {
    setMenuShow(!menuShow);
  };

  return (
    <div className="header  navbar-expand-lg   d-flex flex-column  position-relative">
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
            Optimus
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
            <LanguageSwitcher languages={["En", "Ar"]} />
            <form className="d-flex searchAndIcons d-flex align-items-center">
              <SearchInput
                alt={"search"}
                icon={search}
                holder={"What are you looking for?"}
              />
            </form>
            <div className="d-flex align-items-center">
              <Link href="/wishlist" className="ms-4">
                <span className="wishlistIcon">
                  <Image src={wishlist} alt="wishlist" />
                </span>
              </Link>
              <Link href="/cart" className="ms-4">
                <span className="cartIcon">
                  <Image src={cart} alt="cartIcon" />
                </span>
              </Link>
              {authanticated ? (
                <div className="profileImage" onClick={handlingShow}>
                  <Image src={avatar} alt="avatar" />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </nav>
      <div
        className={
          menuShow
            ? "avatarMenu position-absolute active "
            : "avatarMenu position-absolute "
        }
      >
        <ul className="d-flex flex-column">
          <li className="avatarMenuItem">
            <Link className="avatarMenuItemLink text-white" href="/profile">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Manage My Account
            </Link>
          </li>
          <li className="avatarMenuItem">
            <Link className="avatarMenuItemLink text-white" href="/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6.3V20.5C3 20.7652 3.10536 21.0196 3.29289 21.2071C3.48043 21.3946 3.73478 21.5 4 21.5H20C20.2652 21.5 20.5196 21.3946 20.7071 21.2071C20.8946 21.0196 21 20.7652 21 20.5V6.3H3Z"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 6.3L18.1665 2.5H5.8335L3 6.3M15.7775 9.6C15.7775 11.699 14.0865 13.4 12 13.4C9.9135 13.4 8.222 11.699 8.222 9.6"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              My Order
            </Link>
          </li>
          <li className="avatarMenuItem">
            <Link className="avatarMenuItemLink text-white" href="/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1097_458)">
                  <path
                    d="M8 16L12 12M16 8L11.9992 12M11.9992 12L8 8M12 12L16 16"
                    stroke="#FAFAFA"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="11.25"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1097_458">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              My Cancellations
            </Link>
          </li>
          <li className="avatarMenuItem">
            <Link className="avatarMenuItemLink text-white" href="/">
              <svg
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8284 6.93621C18.4517 6.93621 18.7176 7.72859 18.2205 8.10461L14.8905 10.6234C14.1688 11.1693 13.8661 12.1087 14.1334 12.9732L15.3864 17.0261C15.5735 17.6312 14.8729 18.1193 14.3701 17.7341L11.3075 15.3879C10.536 14.7969 9.46399 14.7969 8.69251 15.3879L5.61357 17.7466C5.11152 18.1312 4.41161 17.645 4.59677 17.0403L5.83243 13.0046C6.09532 12.146 5.79694 11.2145 5.08413 10.6684L1.73432 8.1022C1.24111 7.72436 1.50831 6.93621 2.12961 6.93621H6.12744C7.07024 6.93621 7.90305 6.32198 8.18152 5.42125L9.379 1.5479C9.5678 0.937212 10.4322 0.937216 10.621 1.5479L11.8185 5.42124C12.0969 6.32198 12.9298 6.93621 13.8726 6.93621H17.8284Z"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                />
              </svg>
              My Reviews
            </Link>
          </li>
          <li className="avatarMenuItem">
            <Link className="avatarMenuItemLink text-white" href="/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12H13.5M6 15L3 12L6 9M11 7V6C11 5.46957 11.2107 4.96086 11.5858 4.58579C11.9609 4.21071 12.4696 4 13 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H13C12.4696 20 11.9609 19.7893 11.5858 19.4142C11.2107 19.0391 11 18.5304 11 18V17"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
