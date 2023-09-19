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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
