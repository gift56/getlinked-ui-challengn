import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <section className="w-full py-10 border-b border-borderColor">
      <div className="container overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center flex-col">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash"
            >
              Partners and Sponsors
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-center text-sm font-normal"
            >
              Getlinked Hackathon 1.0 is honored to have the following major{" "}
              <br className="hidden tab:block" />
              companies as its partners and sponsors
            </motion.p>
          </div>
          <div className="w-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/sponsorsImg.png"
              alt="sponsors"
              className="w-full tab:w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
