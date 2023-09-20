import { useState, useEffect } from "react";
import Link from "next/link";
import { CustomizeButton, Star } from "..";
import { motion } from "framer-motion";

const Hero = () => {
  const [countdown, setCountdown] = useState<number | null | any>(null);

  useEffect(() => {
    const calculateTimeRemaining = () => {
      // Getting the current time
      const currentTime = new Date().getTime();
      const targetTime = new Date("2023-09-30T21:12:14").getTime();

      // Calculate the remaining time by subtracting the current time from the target time
      const remainingTime = Math.max(targetTime - currentTime, 0);

      // Update the state variable with the remaining time
      setCountdown(remainingTime);
    };

    // Start the countdown interval
    const interval = setInterval(calculateTimeRemaining, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: any) => {
    return value.toString().padStart(2, "0");
  };

  const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((countdown / (1000 * 60)) % 60);
  const seconds = Math.floor((countdown / 1000) % 60);

  return (
    <section className="w-full  border-b border-borderColor">
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
        <div className="w-full flex items-center justify-between gap-6 flex-col tab:flex-row pt-6">
          <div className="w-full relative tab:flex-1 h-full flex flex-col gap-6 items-center justify-center tab:items-start tab:justify-start  py-10 md:pt-28">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center tab:text-start gap-1 justify-center tab:items-start tab:justify-start w-full"
            >
              <span className="relative font-bold text-3xl tab:text-5xl lg:text-6xl !text-white monitor:text-7xl font-clash">
                getlinked Tech
                <img
                  src="/icon/lightbulbIcon.png"
                  alt="bulb"
                  className="w-5 h-5 absolute -top-3 right-3 tab:w-14 tab:h-[73px] z-10 md:-top-16"
                />
              </span>
              <span className="flex items-center flex-wrap">
                <span className="font-bold text-3xl tab:text-5xl xl:text-6xl monitor:text-7xl font-clash">
                  Hackathon <span className="font-clash text-primary">1.0</span>
                </span>
                <img
                  src="/icon/heroIcon.png"
                  alt="hero-chanin"
                  className="w-16 tab:w-24 h-auto"
                />
              </span>
              <Star
                src="/icon/lightstarIcon.png"
                className="left-[25%] top-[2%] tab:left-[8%]"
              />
              <Star
                src="/icon/graystar.png"
                className="left-[65%] bottom-[20%]"
              />
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-sm text-center md:text-base lg:text-xl tab:text-start font-normal"
            >
              Participate in getlinked tech Hackathon 2023 stand{" "}
              <br className="hidden xl:block" /> a chance to win a Big prize
            </motion.p>
            <Link href="/register" className="w-fit">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}
              >
                <CustomizeButton
                  text="Register"
                  className="bg-btnlinear border-none rounded !px-14 !py-3"
                  type="button"
                />
              </motion.div>
            </Link>
            <div className="flex items-center tab:justify-start gap-6">
              <span className="font-unica text-3xl font-normal md:text-4xl uppercase">
                {formatTime(hours)}
                <span className="text-sm font-normal">h</span>
              </span>
              <span className="font-unica text-3xl font-normal md:text-4xl uppercase">
                {formatTime(minutes)}
                <span className="text-sm font-normal">m</span>
              </span>
              <span className="font-unica text-3xl font-normal md:text-4xl uppercase">
                {formatTime(seconds)}
                <span className="text-sm font-normal">s</span>
              </span>
            </div>
          </div>

          <div className="w-full tab:flex-1 h-full flex relative items-center justify-center">
            <Star
              src="/icon/graystar.png"
              className="hidden tab:flex left-[15%] top-[5%]"
            />
            <img
              src="/img/heroBall.png"
              alt="ball"
              className="absolute z-40 animate-pulse duration-300"
            />
            <img src="/img/heroBg.png" alt="heroImg" className="grayscale" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-purple1 hidden lg:flex md:w-[200px] h-[200px]  blur-[150px]  rounded-[50%] right-[15%] top-[30%] absolute z-[-2]"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-purple1 flex w-[100px] h-[100px] md:w-[200px] md:h-[200px] left-[5%] blur-[80px] md:blur-[150px]  rounded-[50%] tab:left-[20%] top-[20%] absolute z-[-2]"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;
