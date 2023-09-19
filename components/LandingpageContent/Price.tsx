import { motion } from "framer-motion";

const Price = () => {
  return (
    <section className="w-full py-10 bg-pricebg bg-no-repeat bg-cover">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <div className="flex items-center justify-center tab:items-end tab:justify-end flex-col gap-4 tab:w-[50%]">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash"
            >
              Prizes and
              <span className="font-clash text-primary block">Rewards</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-center text-sm font-normal tab:text-start"
            >
              We got answers to the questions that you might{" "}
              <br className="hidden tab:block" /> want to ask about{" "}
              <b>getlinked Hackathon 1.0</b>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
