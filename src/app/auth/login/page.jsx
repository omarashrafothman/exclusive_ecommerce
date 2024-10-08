"use client";
import Image from "next/image";
import banner from "../../../../public/Assets/Images/Side Image.png";
import MainInput from "../../../Components/mainInput/mainInput";
import MainButton from "@/Components/mainButton/mainButton";

import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import api from "../../api/axiosInstance.js";
import axios from "axios";
import { useEffect } from "react";

{
  /**export const metadata = {
  title: {
    absolute: "",
    default: "Login | Exclusive E-commerce",
    template: "",
  },
  description: "login to website now for shopping.",
}; */
}
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("password is required"),
});

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

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values, actions) => {
              try {
                const response = await api.post("/api/login", values);

                console.log("Success:", response);
                // window.location.href = "/";
                // Handle successful response, e.g., redirect to another page, store token, etc.
              } catch (error) {
                console.error("Error:", error);
                if (error.response) {
                  setErrors({ api: error.response.data.message });
                }
              }
            }}
            validationSchema={validationSchema}
          >
            {(props) => (
              <form className="registerForm " onSubmit={props.handleSubmit}>
                <MainInput
                  label={"Email or Phone Number"}
                  holder={"Email or Phone Number"}
                  name={"email"}
                  id={"email"}
                  type={"email"}
                  change={props.handleChange}
                  blur={props.handleBlur}
                  val={props.values.email}
                  classes={props.errors.email ? "is-invalid" : "is-valid"}
                  isInvalid={!!props.errors.email && !!props.touched.email}
                  invalidMessage={props.errors.email}
                />
                <MainInput
                  label={"Password"}
                  holder={"Password"}
                  name={"password"}
                  id={"password"}
                  type={"password"}
                  change={props.handleChange}
                  blur={props.handleBlur}
                  val={props.values.password}
                  classes={props.errors.password ? "is-invalid" : "is-valid"}
                  isInvalid={
                    !!props.errors.password && !!props.touched.password
                  }
                  invalidMessage={props.errors.password}
                />
                <div className="d-flex align-items-center justify-content-center my-4 flex-wrap">
                  <div className="col-12">
                    <MainButton
                      content={"Log in"}
                      classes={"btn-primary text-white "}
                      ariaLabel={"login button"}
                      type={"submit"}
                      disable={!props.isValid}
                    />
                  </div>
                  <Link href="/home" className="">
                    Forget Password?
                  </Link>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
