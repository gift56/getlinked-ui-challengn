import { useState, useEffect, useRef } from "react";

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

  return (
    <header className="w-full sticky bg-transparent border-b border-borderColor py-5 top-0 z-50">
      Navbar
    </header>
  );
};

export default Navbar;
