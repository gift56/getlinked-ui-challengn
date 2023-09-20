import { motion } from "framer-motion";
import { Star } from "..";

const Sponsors = () => {
  return (
    <section className="w-full py-14 border-b border-borderColor relative">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center gap-8">
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
          <div className="w-full relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/sponsorsImg.png"
              alt="sponsors"
              className="w-full tab:h-[500px] object-contain"
            />
            <Star
              src="/icon/purplestarIcon.png"
              className="flex left-[12%] tab:left-[55%] top-[2%] tab:top-[15%]"
            />
            <Star
              src="/icon/lightstarIcon.png"
              className="flex left-[12%] tab:left-[55%] bottom-[2%] tab:bottom-[15%]"
            />
            <Star
              src="/icon/purplestarIcon.png"
              className="flex right-[12%] tab:right-[90%] top-[-4%] tab:top-[-5%]"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-purple1 flex w-[100px] h-[100px] md:w-[200px] md:h-[200px] blur-[60px] md:blur-[120px] rounded-[50%] right-[0%] bottom-[-10%] absolute z-[-2]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-purple1 flex w-[100px] h-[100px] md:w-[200px] md:h-[200px] left-[5%] blur-[60px] md:blur-[120px] rounded-[50%] top-[10%] absolute z-[-2]"
      ></motion.div>
    </section>
  );
};

export default Sponsors;
