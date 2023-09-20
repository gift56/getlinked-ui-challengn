import { useState } from "react";
import { CustomizeButton, CustomizeInput, SuccessfulModal } from "@/components";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { ContactValue } from "@/types";
import { contactSchema } from "@/schema";

const Contactpage = () => {
  const [success, setSuccess] = useState(false);
  const navLinks = [
    {
      href: "/#timeline",
      text: "Timeline",
    },
    {
      href: "/#overview",
      text: "Overview",
    },
    {
      href: "/#faqs",
      text: "FAQs",
    },
  ];

  const initialValues: ContactValue = {
    first_name: "",
    phone_number: "",
    email: "",
    message: "",
  };

  const onSubmit = async (payload: ContactValue, actions: any) => {
    console.log(payload);
    setSuccess(true);
    await new Promise((res) => setTimeout(res, 1000));
    actions.resetForm();
  };

  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit,
  });

  const getError = (key: keyof ContactValue) => {
    return touched[key] && errors[key];
  };

  return (
    <>
      <Head>
        <title>Getlinked - Contact Us</title>
        <meta
          name="description"
          content="Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize"
        />
      </Head>
      <header className="w-full py-10">
        <div className="container">
          <div className="flex items-center justify-between w-full">
            <Link
              href="/"
              className="text-xl md:text-2xl lg:text-3xl font-clash font-bold text-white"
            >
              get
              <span className="text-primary font-bold font-clash">linked</span>
            </Link>
            <nav className="hidden md:flex items-center justify-end gap-8">
              {navLinks.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  className="text-base font-medium hover:text-primary transition-all"
                >
                  {item.text}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-base font-medium bg-clip-text text-transparent bg-textgradient transition-all"
              >
                Contact
              </Link>

              <Link href="/register" className="w-fit">
                <CustomizeButton
                  text={<span className="relative">Register</span>}
                  className="bg-btnlinear border-none rounded !px-10 !py-3 ml-10"
                  type="button"
                />
              </Link>
            </nav>
            <h2 className="tab:hidden text-lg font-semibold font-clash text-primary">
              Register
            </h2>
          </div>
        </div>
      </header>
      <section className="w-full pb-8 lg:pb-0 lg:h-screen">
        <div className="container h-full">
          <div className="w-full relative flex h-full flex-col items-center justify-between lg:flex-row  gap-6">
            <div className="hidden lg:flex items-center w-full relative h-full">
              <div className="flex flex-col items-start justify-start gap-5">
                <h2 className="text-3xl font-semibold font-clash text-primary">
                  Get in touch
                </h2>
                <p className="text-base font-normal text-start">
                  Contact <br /> Information
                </p>
                <p className="text-base font-normal text-start">
                  27,Alara Street <br /> Yaba 100012
                  <br /> Lagos State
                </p>
                <p className="text-base font-normal text-start">
                  Call Us : 07067981819
                </p>
                <p className="text-base font-normal text-start">
                  we are open from Monday-Friday <br /> 08:00am - 05:00pm
                </p>
              </div>
              <img
                src="/icon/purplestarIcon.png"
                alt="star"
                className="absolute hidden tab:flex tab:top-[5%] tab:left-[10%] z-40"
                width={20}
                height={20}
              />
              <img
                src="/icon/lightstarIcon.png"
                alt="star"
                className="absolute right-0 bottom-[40%] tab:bottom-[20%] tab:right-[10%] z-40"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactpage;
