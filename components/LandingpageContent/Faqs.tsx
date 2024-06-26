import { faqData } from "@/utils/constant";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const Faqs = () => {
  const [opened, setOpened] = useState<String | null>(null);

  const toggle = (id: String) => {
    setOpened(opened !== id ? id : null);
  };

  return (
    <section id="faqs" className="w-full py-10 border-b border-borderColor">
      <div className="container overflow-hidden">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col-reverse tab:flex-row-reverse">
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
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/icon/lightstarIcon.png"
              alt="star"
              className="absolute flex right-[24%] bottom-0 tab:w-5 w-3 animate-pulse duration-500"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/icon/purplestarIcon.png"
              alt="star"
              className="absolute flex left-[24%] top-[24%] tab:w-5 w-3 animate-pulse duration-500"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/icon/purplestarIcon.png"
              alt="star"
              className="absolute flex left-[48%] top-[4%] tab:w-5 w-3 animate-pulse duration-500"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/icon/graystar.png"
              alt="star"
              className="absolute flex left-[17%] top-[54%] tab:w-5 w-3 animate-pulse duration-500"
            />
          </div>
          <div className="w-full tab:flex-1 flex flex-col gap-5 relative">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/icon/purplestarIcon.png"
              alt="star"
              className="absolute flex left-0 top-0 tab:top-[-9%] tab:w-5 w-3 animate-pulse duration-500"
            />
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
            <div className="w-full flex items-start flex-col gap-5 mt-6">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  onClick={() => toggle(item.id)}
                  className="flex flex-col items-start justify-start w-full border-b border-primary cursor-pointer pb-2 transition-all duration-300"
                >
                  <div className="w-full flex items-center justify-between">
                    <h2 className="text-sm font-normal">{item.question}</h2>
                    <span className=" text-primary">
                      {item.id === opened ? (
                        <FiMinus
                          size={18}
                          className="transition-all duration-300"
                        />
                      ) : (
                        <FiPlus
                          size={18}
                          className="transition-all duration-300"
                        />
                      )}
                    </span>
                  </div>
                  <div
                    className={`w-full pt-4 text-sm font-normal ${
                      item.id === opened ? "block" : "hidden"
                    } transition-all duration-300`}
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
