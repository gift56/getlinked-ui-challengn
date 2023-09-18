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

        <div className="w-full flex items-center justify-between gap-6 flex-col md:flex-row py-10 md:py-28">
          <div className="w-full md:flex-1 h-full flex flex-col items-start justify-start">
            <h2 className="flex flex-col items-center text-center justify-center md:items-start md:justify-start w-full">
              <span className="relative font-bold text-3xl md:text-5xl lg:text-6xl monitor:text-7xl font-clash">
                getlinked Tech
                <img src="/icon/lightbulbIcon.png" alt="bulb" className="w-5 h-5 absolute -top-3 right-3 md:w-14 md:h-[73px] z-10 md:-top-16" />
              </span>
              <span>
                Hackathon <span>1.0</span>{" "}
                <img src="/icon/heroIcon.png" alt="hero-chanin" />
              </span>
            </h2>
          </div>
          <div className="w-full md:flex-1 h-full flex items-center justify-start"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
