import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { CustomizeButton } from ".";
import Image from "next/image";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside: EventListener = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setMobileNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    {
      href: "#timeline",
      text: "Timeline",
    },
    {
      href: "#overview",
      text: "Overview",
    },
    {
      href: "#faqs",
      text: "FAQs",
    },
  ];

  return (
    <header className="w-full sticky bg-transparent border-b border-borderColor py-5 top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="text-xl md:text-2xl lg:text-3xl font-clash font-bold text-white"
          >
            get<span className="text-primary font-bold font-clash">linked</span>
          </Link>
          <nav className="hidden md:flex items-center justify-end gap-8">
            {navLinks.map((item, i) => (
              <Link
                href={item.href}
                key={i}
                className="text-base font-normal hover:text-primary transition-all"
              >
                {item.text}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-base font-normal hover:text-primary transition-all"
            >
              Contact
            </Link>

            <Link href="/register" className="w-fit">
              <CustomizeButton
                text="Register"
                className="bg-btnlinear border-none rounded !px-8"
                type="button"
              />
            </Link>
          </nav>
          <span className="cursor-pointer">
            <Image src="" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
