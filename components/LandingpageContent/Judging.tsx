import { motion } from "framer-motion";

const Judging = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
        duration: 0.4,
      },
    },
  };

  const itemdisplay = {
    hidden: { opacity: 0, y: 60, scale: 0.5 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 5,
      type: "spring",
    },
  };

  return (
    <section className="w-full py-10 border-b border-borderColor">
      <div className="container overflow-hidden">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col tab:flex-row">
          <div className="w-full tab:flex-1">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/ideaImg.png"
              alt="ideaImg"
              className="tab:w-[490px] w-[264px] mx-auto"
            />
          </div>
          <div className="w-full tab:flex-1 flex flex-col gap-1">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash"
            >
              Judging Criteria
              <span className="font-clash text-primary block">
                Key attributes
              </span>
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judging;
