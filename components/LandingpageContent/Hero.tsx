import Link from "next/link";
import { CustomizeButton } from "..";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="container">
        <div className="w-full flex justify-end items-end flex-col pt-4">
          <h2 className="text-sm phone:text-base font-bold md:text-2xl lg:text-3xl text-white">
            <i>Igniting a Revolution in HR Innovation</i>
          </h2>
          <img
            src="/icon/hrIcon.svg"
            alt="stroke"
            className="max-w-full w-[115px] md:w-[250px]"
          />
        </div>

        <div className="w-full flex items-center justify-between gap-6 flex-col tab:flex-row">
          <div className="w-full tab:flex-1 h-full flex flex-col gap-6 items-center justify-center tab:items-start tab:justify-start  py-10 md:py-28">
            <h2 className="flex flex-col items-center text-center tab:text-start gap-1 justify-center md:items-start md:justify-start w-full">
              <span className="relative font-bold text-3xl tab:text-5xl lg:text-6xl monitor:text-7xl font-clash">
                getlinked Tech
                <img
                  src="/icon/lightbulbIcon.png"
                  alt="bulb"
                  className="w-5 h-5 absolute -top-3 right-3 tab:w-14 tab:h-[73px] z-10 md:-top-16"
                />
              </span>
              <span className="flex items-center">
                <span className="font-bold text-3xl tab:text-5xl xl:text-6xl monitor:text-7xl font-clash">
                  Hackathon <span className="font-clash text-primary">1.0</span>
                </span>
                <img
                  src="/icon/heroIcon.png"
                  alt="hero-chanin"
                  className="w-16 tab:w-24 h-auto"
                />
              </span>
            </h2>
            <p className="text-sm text-center md:text-base lg:text-xl tab:text-start font-normal">
              Participate in getlinked tech Hackathon 2023 stand{" "}
              <br className="hidden xl:block" /> a chance to win a Big prize
            </p>
            <Link href="/register" className="w-fit">
              <CustomizeButton
                text="Register"
                className="bg-btnlinear border-none rounded !px-14 !py-3"
                type="button"
              />
            </Link>
            <div className="flex items-center tab:justify-start gap-6">
              
            </div>
          </div>
          <div className="w-full tab:flex-1 h-full flex items-center justify-start"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
