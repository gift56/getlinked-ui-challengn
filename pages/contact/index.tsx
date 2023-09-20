import { useState } from "react";
import {
  CustomizeButton,
  CustomizeInput,
  CustomizeTextarea,
  SuccessfulModal,
} from "@/components";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { ContactValue } from "@/types";
import { contactSchema } from "@/schema";
import { socialIcons } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/router";
import { baseUrl } from "@/config";
import { request } from "@/lib/request";
import { toast } from "react-toastify";

const Contactpage = () => {
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };
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

  const registerUser = async (data: ContactValue) => {
    try {
      const res = await baseUrl.post(request.contact, data);
      setSuccess(true);
      return res.data;
    } catch (error: any) {
      if (error.message === "Network Error") {
        toast.error(error.message, {
          position: "top-center",
          toastId: 1,
          autoClose: 1500,
        });
      } else {
        toast.error(error.response.data.email[0], {
          position: "top-center",
          toastId: 1,
          autoClose: 1500,
        });
      }
    }
  };

  const onSubmit = async (payload: ContactValue, actions: any) => {
    console.log(payload);
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
            <span
              className="w-7 h-7 bg-btnlinear rounded-full flex md:hidden items-center relative justify-center before:absolute before:inset-[1px] before:bg-dark before:rounded-full before:transition-all before:duration-300 hover:before:opacity-90"
              onClick={handleBack}
            >
              <Image
                src="/icon/downIcon.svg"
                alt="bar-icon"
                width={12}
                height={12}
                className="relative rotate-90"
              />
            </span>
          </div>
        </div>
      </header>
      <section className="w-full pb-8 lg:pb-0 lg:h-screen">
        <img
          src="/icon/purplestarIcon.png"
          alt="star"
          className="absolute flex top-[15%] left-[50%] tab:top-[25%] tab:left-[15%] w-3 tab:w-6 z-40"
        />
        <img
          src="/icon/lightstarIcon.png"
          alt="star"
          className="absolute bottom-[-20%] w-3 tab:w-6 right-[10%] z-40"
        />
        <img
          src="/icon/graystar.png"
          alt="star"
          className="absolute top-[20%] w-3 tab:w-6 right-[15%] z-40"
        />
        <img
          src="/icon/purplestarIcon.png"
          alt="star"
          className="absolute bottom-[-25%] right-[80%] tab:bottom-[5%] w-3 tab:w-6 tab:right-[50%] z-40"
        />
        <div className="container h-full">
          <div className="w-full relative flex h-full flex-col items-center justify-between lg:flex-row lg:w-[80%] lg:mx-auto  gap-6">
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
                <div className="flex flex-col items-start justify-start gap-3">
                  <p className="text-primary text-base font-normal">Share on</p>
                  <nav
                    aria-label="footer_social"
                    className="flex items-center justify-start gap-3"
                  >
                    {socialIcons.map((item, i) => (
                      <Link key={i} href={item.href}>
                        <img src={item.icon} alt={item.href} />
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
            <div className="w-full lg:bg-[#ffffff08] lg:shadow-registerShad lg:rounded-xl lg:p-10 text-white lg:h-[550px] lg:overflow-y-auto flex flex-col items-start justify-start gap-5 relative">
              <h2 className="text-xl font-semibold font-clash text-primary">
                <span className="font-clash">
                  Questions or need assistance?
                </span>
                <span className="font-clash block">Let us know about it!</span>
              </h2>
              <p className="text-sm font-normal lg:hidden">
                Email us below to any question related to our event
              </p>

              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-center justify-center gap-4"
              >
                <CustomizeInput
                  showLabel={true}
                  type="text"
                  name="first_name"
                  value={values.first_name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getError("first_name")}
                  placeholder="First Name"
                  errorClass="hidden"
                  className="bg-[#ffffff08] border border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-white focus:border-primary transition-all duration-300"
                />
                <CustomizeInput
                  showLabel={true}
                  type="text"
                  name="phone_number"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getError("phone_number")}
                  placeholder="Phone number"
                  errorClass="hidden"
                  className="bg-[#ffffff08] border border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-white focus:border-primary transition-all duration-300"
                />
                <CustomizeInput
                  showLabel={true}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getError("email")}
                  placeholder="Mail"
                  errorClass="hidden"
                  className="bg-[#ffffff08] border border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-white focus:border-primary transition-all duration-300"
                />
                <CustomizeTextarea
                  showLabel={true}
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={getError("message")}
                  errorClass="hidden"
                  placeholder="Message"
                  id="message"
                  className="bg-[#ffffff08] border pt-3 border-white h-[114px] resize-none w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-white focus:border-primary transition-all duration-300"
                />

                <CustomizeButton
                  text="Submit"
                  className="bg-btnlinear border-none rounded !px-10 w-fit my-4 flex"
                  type="submit"
                  disabled={isSubmitting}
                />
              </form>
              <div className="lg:hidden flex-col items-center justify-center gap-3 text-center w-full">
                <p className="text-primary text-sm font-normal">Share on</p>
                <nav
                  aria-label="footer_social"
                  className="flex items-center justify-center gap-3"
                >
                  {socialIcons.map((item, i) => (
                    <Link key={i} href={item.href}>
                      <img src={item.icon} alt={item.href} />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex bg-purple1 w-[100px] h-[100px] lg:w-[250px] lg:h-[250px] rounded-[50%] blur-[80px] lg:blur-[120px] top-[40%] left-[5%] lg:left-20 lg:top-[24%] absolute z-[-2]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-purple1 hidden lg:flex md:w-[200px] h-[200px] blur-[150px] rounded-[50%] right-0 bottom-0 absolute z-[-2]"
        ></motion.div>
      </section>
      <SuccessfulModal
        show={success}
        setShow={setSuccess}
        title={<span className="text-center">Submitted successfully!</span>}
      />
    </>
  );
};

export default Contactpage;
