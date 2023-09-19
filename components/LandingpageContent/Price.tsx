import { motion } from "framer-motion";

const Price = () => {
  return (
    <section className="w-full py-10 bg-gray-600">
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
              Highlight of the prizes or rewards for winners and <br className="hidden tab:block" /> for
              participants.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
