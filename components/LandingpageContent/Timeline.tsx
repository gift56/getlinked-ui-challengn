import { timelineData } from "@/utils/constant";
import { motion } from "framer-motion";

const Timeline = () => {
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
      duration: 0.9,
    },
  };

  return (
    <section className="w-full py-10">
      <div className="container overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col gap-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
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
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full flex flex-col items-center justify-center gap-3"
          >
            {/* DESKTOP */}
            {timelineData.map((item, i) => (
              <motion.div
                variants={itemdisplay}
                key={i}
                className={`hidden tab:flex items-end justify-center gap-20 w-full ${
                  item.row === false ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className={`flex flex-col gap-2 w-full ${
                    item.row === false
                      ? "items-start justify-start"
                      : "items-end justify-end"
                  }`}
                >
                  <h2
                    className={`font-bold text-primary text-lg lg:text-2xl lg:max-w-[450px] ${
                      item.row === false ? "text-left" : "text-right"
                    }`}
                  >
                    {item.topic}
                  </h2>
                  <p
                    className={`text-sm font-normal lg:max-w-[500px] ${
                      item.row === false ? "text-left" : "text-right"
                    }`}
                  >
                    {item.content}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="/icon/lineIcon.svg"
                    alt="line_icon"
                    className="h-[77px] tab:h-[137px] object-contain"
                  />
                  <span className="w-14 h-14 flex items-center justify-center rounded-full bg-btnlinear font-bold text-lg tab:text-2xl">
                    {i + 1}
                  </span>
                </div>
                <p
                  className={`flex font-bold text-primary text-lg lg:text-2xl w-full ${
                    item.row === false
                      ? "text-left items-end justify-end"
                      : "text-right items-start justify-start "
                  }`}
                >
                  {item.date}
                </p>
              </motion.div>
            ))}
            {/* MOBILE */}
            {timelineData.map((item, i) => (
              <motion.div
                variants={itemdisplay}
                key={i}
                className="tab:hidden flex items-start justify-start w-full gap-4"
              >
                <div className="flex flex-col items-center justify-center gap-1">
                  <img
                    src="/icon/lineIcon.svg"
                    alt="line_icon"
                    className="h-[115px] tab:h-[137px] object-contain"
                  />
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-btnlinear text-sm font-bold md:text-lg">
                    {i + 1}
                  </span>
                </div>
                <div className="flex items-start justify-start flex-col gap-2">
                  <h2 className="text-sm font-bold text-primary sm:text-lg">
                    {item.topic}
                  </h2>
                  <p className="text-sm font-normal">{item.content}</p>
                  <p className="flex items-start justify-start text-sm font-bold text-primary sm:text-lg">
                    {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
