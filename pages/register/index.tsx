import { CustomizeButton } from "@/components";
import Head from "next/head";
import Link from "next/link";

const Registerpage = () => {
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
                  className="text-base font-normal hover:text-primary transition-all"
                >
                  {item.text}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-base font-normal bg-clip-text text-transparent bg-textgradient transition-all"
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
          </div>
        </div>
      </header>
      <section className="w-full tab:h-screen tab:overflow-hidden">
        <div className="container h-full">
          <div className="w-full flex flex-col items-center justify-between tab:justify-start gap-6">
            <div className="w-full">
              <img src="/img/registerImg.png" alt="registration_avatar" className="tab:h-[650px] object-cover" />
            </div>
            <div className="w-full tab:bg-[#ffffff08] tab:shadow-registerShad tab:rounded-xl"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registerpage;
