import { motion } from "framer-motion";
import { useState } from "react";

const Faqs = () => {
  const [opened, setOpened] = useState<String | null>(null);

  const toggle = (id: String) => {
    setOpened(opened !== id ? id : null);
  };

  return (
    <section className="w-full py-10 border-b border-borderColor">
      <div className="container overflow-hidden">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col tab:flex-row-reverse">
          <div className="w-full tab:flex-1 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/faqImg.png"
              alt="faq"
              className="tab:w-[490px] w-[264px] mx-auto relative z-10"
            />
          </div>
          <div className="w-full tab:flex-1 flex flex-col gap-5">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash"
            >
              Frequently Ask
              <span className="font-clash text-primary block">Question</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-center text-sm font-normal tab:text-start"
            >
              We got answers to the questions that you might{" "}
              <br className="hidden tab:block" /> want to ask about{" "}
              <b>getlinked Hackathon 1.0</b>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
