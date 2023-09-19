import { judgingCriteria } from "@/utils/constant";
import { motion } from "framer-motion";

const Judging = () => {
  const container = {
    hidden: { opacity: 0 },
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
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
  };

  return (
    <section className="w-full py-10 border-b border-borderColor">
      <div className="container overflow-hidden">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col tab:flex-row">
          <div className="w-full tab:flex-1 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/rulesImg.png"
              alt="ideaImg"
              className="tab:w-[490px] w-[264px] mx-auto relative z-10"
            />
            <div className="hidden tab:block w-[100px] h-[100px] bg-btnlinear rounded-full absolute top-14 xl:top-[15%] right-14 xl:right-[25%] p-5"></div>
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
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex tab:items-start flex-col items-center justify-center text-center tab:text-start tab:justify-start w-full"
            >
              {judgingCriteria.map((item, i) => (
                <motion.li
                  variants={itemdisplay}
                  key={i}
                  className="text-sm font-normal"
                >
                  <span className="text-primary font-bold tab:text-base">
                    {item.headline}
                  </span>
                  <span>{item.content}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Judging;
