const Hero = () => {
  return (
    <section className="w-full h-screen lg:overflow-hidden">
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
        <div className="w-full flex items-center justify-between gap-6 flex-col md:flex-row">
          <div className="w-full md:flex-1 h-full flex flex-col items-start justify-start">
            <h2 className="flex flex-col items-center text-center justify-center md:items-start md:justify-start">
              
            </h2>
          </div>
          <div className="w-full md:flex-1 h-full flex items-center justify-start"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
