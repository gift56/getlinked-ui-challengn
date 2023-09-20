import { useState } from "react";
import { CustomizeButton, CustomizeInput, SuccessfulModal } from "@/components";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import { ContactValue } from "@/types";

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

  return <div>Contactpage</div>;
};

export default Contactpage;
