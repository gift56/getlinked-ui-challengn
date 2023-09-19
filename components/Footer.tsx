import { footerLinks, socialIcons } from "@/utils/constant";
import { CgPhone } from "react-icons/cg";
import { HiLocationMarker } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-14 bg-footerBg">
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
      </div>
    </footer>
  );
};

export default Footer;
