import { judgingCriteria } from "@/utils/constant";
import { motion } from "framer-motion";
import Link from "next/link";
import { CustomizeButton } from "..";

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
    <section className="w-full py-10 border-b relative border-borderColor">
      <div className="container overflow-hidden">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col tab:flex-row">
          <div className="w-full tab:flex-1 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/judgingCriteriaImg.png"
              alt="judginimg"
              className="tab:w-[490px] w-[264px] mx-auto relative z-10"
            />
            <div className="hidden tab:block w-[100px] h-[100px] bg-btnlinear rounded-full absolute -top-5 left-14 xl:left-[20%] p-5"></div>
          </div>
          <div className="w-full tab:flex-1 flex flex-col items-center justify-center tab:items-start tab:justify-start gap-5">
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
              className="flex tab:items-start flex-col items-center justify-center text-center tab:text-start tab:justify-start w-full gap-3"
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
            <Link href="/" className="w-fit mt-5">
              <CustomizeButton
                text="Read More"
                className="bg-btnlinear border-none rounded !px-10 tab:!px-14 tab:!py-3"
                type="button"
              />
            </Link>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-btnlinear flex w-[100px] h-[100px] md:w-[200px] md:h-[200px] blur-[80px] md:blur-[120px] rounded-[50%] right-[0%] bottom-[10%] md:bottom-[-10%] absolute z-[-2]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-btnlinear flex w-[100px] h-[100px] md:w-[200px] md:h-[200px] left-[5%] blur-[80px] md:blur-[120px] rounded-[50%] tab:left-[10%] top-[20%] tab:top-[50%] absolute z-[-2]"
      ></motion.div>
    </section>
  );
};

export default Judging;
