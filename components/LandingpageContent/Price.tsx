import { motion } from "framer-motion";

const Price = () => {
  return (
    <section className="w-full py-10">
      <div className="container overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center tab:items-start tab:justify-start flex-col gap-3 tab:w-[45%] tab:ml-auto">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash"
            >
              Prizes and
              <span className="font-clash text-primary block">Rewards</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-center text-sm font-normal tab:text-start"
            >
              Highlight of the prizes or rewards for winners and{" "}
              <br className="hidden tab:block" /> for participants.
            </motion.p>
          </div>
          <div className="flex items-center flex-col tab:flex-row justify-center gap-6 tab:items-end tab:justify-between w-full">
            <div className="w-full lg:flex-1">
              <img
                src="/img/priceImg.png"
                alt="price_rewardImg"
                className="w-full tab:w-[480px] object-contain"
              />
            </div>
            <div className="w-full lg:flex-1 grid grid-cols-3 gap-1 items-start justify-start">
              <div className="w-full relative h-[296px] border-primary border bg-[#d434fe1f] rounded-lg flex-col p-3 items-center justify-center flex gap-3">
                <img
                  src="/img/secondPrize.png"
                  alt="2nd_runner_position_image"
                />

                <div className="flex flex-col items-center w-full">
                  <h2 className="text-sm md:text-base tab:text-2xl lg:text-3xl font-bold flex flex-col items-center">
                    <span>2nd</span>
                    <span className="tab:text-2xl font-semibold">
                      Runner
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
