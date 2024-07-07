import React from "react";
import Image from "next/image";
import banner from "../../../../public/Assets/Images/Side Image.png";
import MainInput from "../../../Components/mainInput/mainInput";
import MainButton from "@/Components/mainButton/mainButton";

import Link from "next/link";
export const metadata = {
  title: {
    absolute: "",
    default: "Login | Exclusive E-commerce",
    template: "",
  },
  description: "login to website now for shopping.",
};
function Login() {
  return (
    <div className="register d-flex justify-content-between flex-wrap ">
      <div className="registerBanner col-12  col-lg-7">
        <Image src={banner} alt="register here" className="" />
      </div>
      <div className="registerFormBox col-12  col-lg-5 ">
        <div className="formContentBox">
          <h2 className="formHead ">Log in to Exclusive</h2>
          <p>Enter your details below</p>
          <form className="registerForm ">
            <MainInput
              label={"Email or Phone Number"}
              holder={"Email or Phone Number"}
              name={"email"}
              id={"email"}
              type={"email"}
            />
            <MainInput
              label={"Password"}
              holder={"Password"}
              name={"password"}
              id={"password"}
              type={"password"}
            />
            <div className="d-flex align-items-center justify-content-between my-4">
              <div className="w-25">
                <MainButton
                  content={"Log in"}
                  classes={"btn-primary text-white"}
                />
              </div>
              <Link href="/home">Forget Password?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
