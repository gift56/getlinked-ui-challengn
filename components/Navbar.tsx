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
          <span
            onClick={() => setMobileNav(true)}
            className="cursor-pointer md:hidden"
          >
            {mobileNav === false && (
              <Image
                src="/icon/barIcon.svg"
                alt="bar-icon"
                width={20}
                height={20}
              />
            )}
          </span>
        </div>
      </div>
      {/* MOBILE NAV */}
      <div
        className={`${
          mobileNav ? "top-0" : "-top-[100vh]"
        } md:hidden flex flex-col h-screen bg-black/40 gap-7 absolute top-0 w-full z-40 transition-all duration-300`}
      >
        <div
          ref={modalRef}
          className={`flex flex-col h-[80%]  w-[90%] mx-auto bg-dark rounded-lg border border-borderColor gap-5 p-4 relative ${
            mobileNav ? "top-16" : "-top-full"
          } transition-all duration-500`}
        >
          <div className="w-full flex items-center justify-end">
            <span
              className="w-7 h-7 bg-btnlinear rounded-full flex items-center relative justify-center before:absolute before:inset-[1px] before:bg-dark before:rounded-full before:transition-all before:duration-300 hover:before:opacity-90"
              onClick={() => setMobileNav(false)}
            >
              <Image
                src="/icon/closeIcon.svg"
                alt="bar-icon"
                width={15}
                height={15}
                className="relative"
              />
            </span>
          </div>

          <nav className="flex flex-col items-start justify-start gap-6 w-full">
            {navLinks.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={() => setMobileNav(false)}
                className="text-base font-medium text-gray1 hover:text-primary transition-all w-full"
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
                className="bg-btnlinear border-none rounded !px-10 !py-3"
                type="button"
              />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
