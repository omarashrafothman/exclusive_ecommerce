"use client";
import React from "react";
import Image from "next/image";
import banner from "../../../../public/Assets/Images/Side Image.png";
import MainInput from "../../../Components/mainInput/mainInput";
import MainButton from "@/Components/mainButton/mainButton";
import google from "../../../../public/Assets/Icons/Google.png";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";

{
  /**export const metadata = {
  title: {
    absolute: "",
    default: "Sign up | Exclusive E-commerce",
    template: "",
  },
  description: "Create your website for shopping now.",
}; */
}
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be 50 characters or less")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  // .matches("^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$"),
});
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

          <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values));
              actions.setSubmitting(false);
            }}
            validationSchema={validationSchema}
          >
            {(props) => (
              <form className="registerForm " onSubmit={props.handleSubmit}>
                <MainInput
                  label={"Name"}
                  holder={"Name"}
                  name={"name"}
                  id={"nameInput"}
                  type={"text"}
                  change={props.handleChange}
                  blur={props.handleBlur}
                  val={props.values.name}
                  classes={props.errors.name ? "is-invalid" : "is-valid"}
                  isInvalid={!!props.errors.name && !!props.touched.name}
                  invalidMessage={props.errors.name}
                />

                <MainInput
                  label={"Email or Phone Number"}
                  holder={"Email or Phone Number"}
                  name={"email"}
                  id={"email"}
                  type={"email"}
                  change={props.handleChange}
                  blur={props.handleBlur}
                  val={props.values.email}
                  classes={!!props.errors.email ? "is-invalid" : "is-valid"}
                  isInvalid={!!props.errors.email && !!props.touched.email}
                  invalidMessage={props.errors.email}
                />

                <MainInput
                  label={"Password"}
                  classes={props.errors.password ? "is-invalid" : "is-valid"}
                  holder={"Password"}
                  name={"password"}
                  id={"password"}
                  type={"password"}
                  change={props.handleChange}
                  blur={props.handleBlur}
                  val={props.values.password}
                  isInvalid={
                    !!props.errors.password && !!props.touched.password
                  }
                  invalidMessage={props.errors.password}
                />

                <MainButton
                  content={"Create Account"}
                  classes={"btn-primary text-white"}
                  ariaLabel={"create account button"}
                  type={"submit"}
                  disable={!props.isValid}
                />
                <MainButton
                  content={"Sign up with Google"}
                  classes={"btn-outline-dark "}
                  img={<Image src={google} alt="google" className="mx-2" />}
                  ariaLabel={"signup with google"}
                  type={"button"}
                />
              </form>
            )}
          </Formik>

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
