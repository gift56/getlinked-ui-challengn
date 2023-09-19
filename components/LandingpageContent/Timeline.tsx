import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className="w-full py-10">
      <div className="container overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-5">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-xl font-bold md:text-2xl text-center tab:text-3xl font-clash"
            >
              Timeline
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-center text-sm font-normal"
            >
              Here is the breakdown of the time we anticipate{" "}
              <br className="hidden tab:block" /> using for the upcoming event.
            </motion.p>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <div className="flex items-center justify-between gap-2 w-full">
              <div className="flex "></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
