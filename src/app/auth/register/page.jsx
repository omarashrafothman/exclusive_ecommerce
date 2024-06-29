import React from "react";
import Image from "next/image";
import banner from "../../../../public/Assets/Images/Side Image.png";
import MainInput from "../../../Components/mainInput/mainInput";
import MainButton from "@/Components/mainButton/mainButton";
import google from "../../../../public/Assets/Icons/Google.png";
import Link from "next/link";

function Register() {
  return (
    <div className="register d-flex justify-content-between flex-wrap ">
      <div className="registerBanner col-12  col-lg-7">
        <Image src={banner} alt="register here" />
      </div>
      <div className="registerFormBox col-12  col-lg-5 ">
        <div className="formContentBox">
          <h2 className="formHead ">Create an account</h2>
          <p>Enter your details below</p>
          <form className="registerForm ">
            <MainInput
              label={"Name"}
              holder={"Name"}
              name={"name"}
              id={"nameInput"}
              type={"text"}
            />
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
            <MainButton
              content={"Create Account"}
              classes={"btn-primary text-white"}
            />
            <MainButton
              content={"Sign up with Google"}
              classes={"btn-outline-dark "}
              img={<Image src={google} alt="google" className="mx-2" />}
            />
          </form>
          <div className="d-flex align-items-center justify-content-center my-4">
            <p className=" mx-auto">
              Already have account?
              <Link href="/auth/login" className="text-black fw-bold">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
