const Hero = () => {
  return (
    <section className="w-full h-screen lg:overflow-hidden">
      <div className="container">
        <div className="w-full flex items-center justify-center md:justify-end md:items-end flex-col pt-4">
          <h2 className="text-base font-bold">
            <i>Igniting a Revolution in HR Innovation</i>
          </h2>
        </div>
        <div className="w-full flex items-center justify-between gap-6 flex-col md:flex-row">
          <div className="w-full md:flex-1 h-full flex items-center justify-start"></div>
          <div className="w-full md:flex-1 h-full flex items-center justify-start"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
