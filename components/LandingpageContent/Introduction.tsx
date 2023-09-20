import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section id="overview" className="w-full py-10 border-b border-borderColor">
      <div className="container overflow-hidden">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col tab:flex-row">
          <div className="w-full tab:flex-1 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/ideaImg.png"
              alt="ideaImg"
              className="tab:w-[490px] w-[264px] mx-auto"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/icon/purplestarIcon.png"
              alt="star"
              className="absolute flex left-[5%] top-[25%] tab:w-5 tab:h-5 w-3 animate-pulse duration-500"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/icon/arrowicon.png"
              alt="arrow"
              className="absolute tab:flex left-[50%] bottom-[-3%] tab:bottom-[10%] tab:left-[85%] tab:w-16 w-6"
            />
          </div>
          <div className="w-full relative tab:flex-1 flex flex-col gap-5">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/icon/purplestarIcon.png"
              alt="star"
              className="absolute hidden tab:flex right-[15%] top-[5%] tab:w-5 tab:h-5 w-3 animate-pulse duration-500"
            />
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash"
            >
              Introduction to getlinked{" "}
              <span className="font-clash text-primary block">
                tech Hackathon 1.0
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-center text-sm  font-normal tab:text-start"
            >
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
