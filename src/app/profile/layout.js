"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useParams } from "next/navigation";

function layout({ children }) {
  const accountLinks = [
    { name: "profile", href: "/profile" },
    { name: "Address Book", href: "/address" },
    { name: "My Payment Options", href: "/paymentOptions" },
  ];
  const ordersLinks = [
    { name: "My Returns", href: "/returns" },
    { name: "My Cancellations", href: "/cancellations" },
  ];
  const Pathname = usePathname();

  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 ">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Manage My Account
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <ul className="d-flex flex-column">
                      {accountLinks.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.href}
                            className={
                              Pathname == item.href ? "  text-danger" : ""
                            }
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    My Orders
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    {" "}
                    <ul className="d-flex flex-column">
                      {ordersLinks.map((item) => (
                        <li>
                          <Link
                            href={item.href}
                            className={
                              Pathname == item.href ? " text-danger" : ""
                            }
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-9">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default layout;
