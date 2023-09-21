import { motion } from "framer-motion";
import { Star } from "..";

const Rules = () => {
  return (
    <section className="w-full py-10 border-b border-borderColor relative">
      <div className="container overflow-hidden">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col tab:flex-row-reverse">
          <div className="w-full tab:flex-1 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/rulesImg.png"
              alt="ruleImg"
              className="tab:w-[490px] w-[264px] mx-auto relative z-10"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="hidden tab:block w-[100px] h-[100px] bg-btnlinear rounded-full absolute top-14 xl:top-[15%] right-14 xl:right-[25%] p-5"
            ></motion.div>
          </div>
          <div className="w-full tab:flex-1 flex flex-col gap-5">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash"
            >
              Rules and
              <span className="font-clash text-primary block">Guidelines</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-center text-sm font-normal tab:text-start"
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
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-purple1 flex w-[80px] h-[80px] md:h-[200px] blur-[80px] rounded-[50%] right-[0%] bottom-[30%] absolute z-[-2]"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-purple1 flex w-[100px] h-[100px] md:w-[200px] md:h-[200px] left-[5%] blur-[80px] md:blur-[125px] rounded-[50%] tab:left-[20%] top-[10%] absolute z-[-2]"
      ></motion.div>
      <Star
        src="/icon/graystar.png"
        className="flex tab:left-[26%] left-[90%] top-[60%] tab:top-[15%]"
      />
      <Star
        src="/icon/lightstarIcon.png"
        className="flex left-[12%] tab:left-[50%] bottom-[2%] tab:bottom-[15%]"
      />
      <Star
        src="/icon/lightstarIcon.png"
        className="flex tab:hidden left-[12%] top-[25%]"
      />
    </section>
  );
};

export default Rules;
