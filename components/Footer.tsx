import { footerLinks, socialIcons } from "@/utils/constant";
import { CgPhone } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full py-14 bg-footerBg relative">
      <div className="container">
        <div className="w-full flex items-start justify-start tab:justify-between gap-6 flex-col tab:flex-row">
          <div className="w-full flex flex-col items-start justify-start gap-2">
            <Link
              href="/"
              className="text-xl md:text-2xl lg:text-3xl font-clash font-bold text-white"
            >
              get
              <span className="text-primary font-bold font-clash">linked</span>
            </Link>
            <p className="text-sm font-normal lg:max-w-[500px]">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>

            <p className="text-sm font-normal flex items-center gap-4 mt-10 tab:mt-20">
              <Link href="#privacy">Terms of Use</Link>
              <span className="w-[2px] h-6 bg-primary rounded-lg"></span>{" "}
              <Link href="#privacy">Privacy Policy</Link>
            </p>
          </div>
          <div className="w-full  md:w-[50%] flex flex-col items-start justify-start gap-2">
            <h2 className="text-primary text-sm md:text-base font-semibold">
              Useful Links
            </h2>
            <nav
              aria-label="footer_nav"
              className="flex flex-col items-start justify-start gap-4"
            >
              {footerLinks.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  className="text-sm font-normal hover:text-primary transition-all duration-200"
                >
                  {item.text}
                </Link>
              ))}
              <div className="flex items-center justify-start gap-3">
                <p className="text-primary text-sm font-normal">Follow us</p>
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
            </nav>
          </div>
          <div className="w-full md:w-[30%] flex flex-col items-start justify-start gap-2">
            <h2 className="text-primary text-sm md:text-base font-semibold">
              Contact Us
            </h2>
            <nav
              aria-label="fooret_contact"
              className="flex flex-col items-start justify-start gap-4"
            >
              <Link
                href="tel:+23467981819"
                className="text-sm font-normal flex items-center justify-start gap-2 hover:text-primary transition-all duration-200"
              >
                <CgPhone size={18} />
                <span>+234 679 81819</span>
              </Link>
              <Link
                href="https://maps.app.goo.gl/gwLdUkkomW9wVB9G9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-normal flex items-center justify-start gap-2 hover:text-primary transition-all duration-200"
              >
                <HiLocationMarker size={20} />
                <span>
                  27,Alara Street <br /> Yaba 100012
                  <br /> Lagos State
                </span>
              </Link>
            </nav>
          </div>
        </div>
        <p className="w-full text-center font-normal text-sm mt-8">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/lightstarIcon.png"
        alt="star"
        className="absolute flex left-[3%] top-[23%] w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/lightstarIcon.png"
        alt="star"
        className="absolute flex right-[3%] bottom-[23%] w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/purplestarIcon.png"
        alt="star"
        className="absolute flex right-[50%] bottom-[10%] tab:bottom-[23%] w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/graystar.png"
        alt="star"
        className="absolute flex right-[25%] top-[50%] tab:top-[23%] w-3"
      />
    </footer>
  );
};

export default Footer;
