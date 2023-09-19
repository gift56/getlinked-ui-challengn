import { motion } from "framer-motion";

const Price = () => {
  return (
    <section className="w-full py-10">
      <div className="container overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center tab:items-start tab:justify-start flex-col gap-3 tab:w-[45%] tab:ml-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
            <div className="w-full">
              <motion.img
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}
                src="/img/priceImg.png"
                alt="price_img"
                className="w-full tab:w-[500px] object-contain"
              />
            </div>
            <div className="w-full">
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}
                src="/img/rewardIcons.png"
                alt="reward_Img"
                className="w-full tab:w-[540px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
