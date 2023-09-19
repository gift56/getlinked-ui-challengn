import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className="w-full py-10">
      <div className="container overflow-hidden">
        <div className="w-full flex flex-col items-center justify-center gap-8">
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
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <div className="flex items-end justify-center -translate-x-16 gap-20 w-full">
              <div className="flex items-start justify-start tab:items-end tab:justify-end flex-col gap-2">
                <h2 className="text-sm font-bold text-primary md:text-lg tab:text-2xl tab:text-right">
                  Hackathon Announcement
                </h2>
                <p className="text-sm font-normal tab:text-right">
                  The getlinked tech hackathon 1.0 is formally announced{" "}
                  <br className="hidden tab:block" /> to the general public and
                  teams begin to get ready to register
                </p>
              </div>
              <div className="flex flex-col items-center justify-center gap-1">
                <img
                  src="/icon/lineIcon.svg"
                  alt="line_icon"
                  className="h-[77px] tab:h-[137px] object-contain"
                />
                <span className="w-5 h-5 tab:w-14 tab:h-14 flex items-center justify-center rounded-full bg-btnlinear text-sm font-bold md:text-lg tab:text-2xl">
                  1
                </span>
              </div>
              <p className="flex items-start justify-start text-sm font-bold text-primary md:text-lg tab:text-2xl">
                November 18, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
