import { useState } from "react";
import {
  CustomizeButton,
  CustomizeInput,
  CustomizeSelect,
  SuccessfulModal,
} from "@/components";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { FormValue } from "@/types";
import { registerSchema } from "@/schema";

const Registerpage = () => {
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

  const initialValues: FormValue = {
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: "",
    group_size: "",
    privacy_poclicy_accepted: false,
  };

  const onSubmit = async (payload: FormValue, actions: any) => {
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
    validationSchema: registerSchema,
    onSubmit,
  });

  const getError = (key: keyof FormValue) => {
    return touched[key] && errors[key];
  };

  return (
    <>
      <Head>
        <title>Getlinked - Register</title>
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
                  className="bg-btnlinear relative before:absolute before:inset-[2px] before:bg-dark before:rounded before:transition-all before:duration-300 hover:before:opacity-90 border-none rounded !px-10 !py-3 ml-10"
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
          <div className="w-full relative flex flex-col items-center justify-between lg:flex-row lg:justify-start gap-6">
            <div className="w-full relative">
              <img
                src="/img/registerImg.png"
                alt="registration_avatar"
                className="lg:h-[650px] object-cover relative"
              />
              <img
                src="/icon/purplestarIcon.png"
                alt="star"
                className="absolute top-[8%] left-[10%] z-40"
                width={20}
                height={20}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="flex bg-btnlinear w-[90%] md:w-[70%] h-[250px] rounded-[50%] blur-[180px] -left-20 top-20 absolute z-[-2]"
              ></motion.div>
            </div>
            <div className="w-full lg:bg-[#ffffff08] lg:shadow-registerShad lg:rounded-xl lg:p-10 text-white lg:h-[620px] lg:overflow-y-auto flex flex-col items-start justify-start gap-5 relative">
              <h2 className="hidden lg:block text-3xl font-semibold font-clash text-primary">
                Register
              </h2>
              <div className="flex flex-col items-start w-full gap-1">
                <p className="text-sm font-normal flex items-end gap-1">
                  <span>Be part of this movement!</span>
                  <img src="" alt="walking_image" />
                </p>
                <h3 className="text-lg md:text-xl font-normal uppercase tab:text-2xl">
                  CREATE YOUR ACCOUNT
                </h3>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-start justify-start gap-4"
              >
                <div className="w-full flex flex-col tab:flex-row items-start justify-between gap-3">
                  <CustomizeInput
                    showLabel={false}
                    label="Team’s Name"
                    htmlFor="team_name"
                    labelClassName="text-sm font-normal"
                    type="text"
                    name="team_name"
                    value={values.team_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={getError("team_name")}
                    id="team_name"
                    placeholder="Enter the name of your group"
                    errorClass="hidden"
                    className="bg-[#ffffff08] border border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-[#ffffff40] focus:border-primary transition-all duration-300"
                  />
                  <CustomizeInput
                    showLabel={false}
                    label="Phone"
                    htmlFor="phone_number"
                    labelClassName="text-sm font-normal"
                    type="text"
                    name="phone_number"
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={getError("phone_number")}
                    id="phone_number"
                    placeholder="Enter your phone number"
                    errorClass="hidden"
                    className="bg-[#ffffff08] border border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-[#ffffff40] focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="w-full flex flex-col tab:flex-row items-start justify-between gap-3">
                  <CustomizeInput
                    showLabel={false}
                    label="Email"
                    htmlFor="email"
                    labelClassName="text-sm font-normal"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={getError("email")}
                    id="email"
                    placeholder="Enter your email address"
                    errorClass="hidden"
                    className="bg-[#ffffff08] border border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-[#ffffff40] focus:border-primary transition-all duration-300"
                  />
                  <CustomizeInput
                    showLabel={false}
                    label="Project Topic"
                    htmlFor="project_topic"
                    labelClassName="text-sm font-normal"
                    type="text"
                    name="project_topic"
                    value={values.project_topic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={getError("project_topic")}
                    id="project_topic"
                    placeholder="What is your group project topic"
                    errorClass="hidden"
                    className="bg-[#ffffff08] border border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-[#ffffff40] focus:border-primary transition-all duration-300"
                  />
                </div>
                <div className="w-full flex flex-col tab:flex-row items-start justify-between gap-3">
                  <CustomizeSelect
                    showLabel={false}
                    label="Category"
                    htmlFor="category"
                    labelClassName="text-sm font-medium text-darkColor"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={getError("category")}
                    errorClass="hidden"
                    name="category"
                    className="bg-[#ffffff08] appearance-none bg-[url(/icon/downIcon.svg)] bg-no-repeat bg-[center_right_0.3rem] lg:bg-[center_right_1.2rem] border border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad text-white placeholder:text-borderColor focus:border-primary transition-all duration-300"
                  >
                    <option id="category" value="" className="bg-black/50">
                      Select your category
                    </option>
                    <option value="1" className="bg-black/50">
                      1
                    </option>
                    <option value="2" className="bg-black/50">
                      2
                    </option>
                  </CustomizeSelect>
                  <CustomizeSelect
                    showLabel={false}
                    label="Group Size"
                    htmlFor="group_size"
                    labelClassName="text-sm font-medium text-darkColor"
                    value={values.group_size}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={getError("group_size")}
                    errorClass="hidden"
                    name="group_size"
                    className="bg-[#ffffff08] cursor-pointer appearance-none bg-[url(/icon/downIcon.svg)] bg-no-repeat bg-[center_right_0.3rem] lg:bg-[center_right_1.2rem] border  border-white h-[44px] w-full rounded px-4 outline-none text-sm shadow-registerShad placeholder:text-borderColor focus:border-primary transition-all duration-300"
                  >
                    <option id="group_size" value="" className="bg-black/50">
                      Select
                    </option>
                    <option value="10" className="bg-black/50">
                      10
                    </option>
                    <option value="20" className="bg-black/50">
                      20
                    </option>
                  </CustomizeSelect>
                </div>
                <p className="text-sm font-normal text-primary">
                  <i>
                    Please review your registration details before submitting
                  </i>
                </p>
                <div className="flex items-center justify-start gap-2">
                  <div
                    className={`bg-transparent w-4 h-4 flex items-center justify-center rounded ${
                      errors.privacy_poclicy_accepted && "border border-red-500"
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="privacy_poclicy_accepted"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      id="privacy_poclicy_accepted"
                      className="outline-none border rounded w-full h-full"
                    />
                  </div>
                  <label
                    htmlFor="privacy_poclicy_accepted"
                    className={`text-sm font-normal cursor-pointer ${
                      errors.privacy_poclicy_accepted && "text-red-500"
                    }`}
                  >
                    {errors.privacy_poclicy_accepted
                      ? errors.privacy_poclicy_accepted
                      : "  I agreed with the every terms and conditions and privacy policy"}
                  </label>
                </div>
                <CustomizeButton
                  text="Register"
                  className="bg-btnlinear border-none rounded !px-10 !py-3 w-full my-4 hidden tab:flex"
                  type="submit"
                  disabled={isSubmitting}
                />
                <div className="w-full flex tab:hidden items-center justify-center">
                  <CustomizeButton
                    text="Submit"
                    className="bg-btnlinear border-none rounded !px-10 w-fit my-4 flex"
                    type="submit"
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="bg-btnlinear hidden lg:flex md:w-[200px] h-[200px] blur-[150px] rounded-[50%] right-0 bottom-10 absolute z-[-2]"
            ></motion.div>
          </div>
        </div>
      </section>
      <SuccessfulModal show={success} setShow={setSuccess} />
    </>
  );
};

export default Registerpage;
