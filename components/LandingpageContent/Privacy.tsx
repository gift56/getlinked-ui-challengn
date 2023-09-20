import { policyData } from "@/utils/constant";
import { motion } from "framer-motion";
import Link from "next/link";
import { CustomizeButton } from "..";

const Privacy = () => {
  return (
    <section id="privacy" className="w-full py-14 relative">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center gap-8 tab:flex-row tab:justify-between tab:items-start">
          <div className="w-full flex flex-col items-center tab:items-start tab:justify-start gap-6">
            <div className="flex items-start justify-start flex-col gap-2">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}
                className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash"
              >
                Privacy Policy and{" "}
                <span className="font-clash text-primary tab:block">Terms</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 2 }}
                viewport={{ once: true }}
                className="text-center tab:text-start text-sm font-normal"
              >
                Last updated on September 12, 2023
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="text-center tab:text-start text-sm font-normal mt-5 lg:max-w-[380px]"
            >
              {`Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant`}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              className="w-full border border-primary bg-[#d9d9d908] rounded-[5px] flex flex-col items-center justify-center gap-6 tab:items-start tab:justify-start px-4 py-6 tab:p-12"
            >
              <p className="text-center tab:text-start text-sm md:text-base font-normal">
                At getlinked tech Hackathon 1.0, we value your privacy{" "}
                <br className="hidden tab:block" /> and are committed to
                protecting your personal information.{" "}
                <br className="hidden tab:block" /> This Privacy Policy outlines
                how we collect, use, disclose,{" "}
                <br className="hidden tab:block" /> and safeguard your data when
                you participate in our tech <br className="hidden tab:block" />{" "}
                hackathon event. By participating in our event, you consent{" "}
                <br className="hidden tab:block" /> to the practices described
                in this policy.
              </p>
              <div className="w-full flex flex-col items-start justify-start gap-1">
                <h4 className="text-sm md:text-base tab:text-lg font-bold text-primary">
                  Licensing Policy
                </h4>
                <p className="text-start text-xs md:text-sm font-bold">
                  Here are terms of our Standard License:
                </p>
                <ul className="w-full flex flex-col gap-6 mt-4 items-start justify-start">
                  {policyData.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-start gap-2 text-start text-sm font-normal"
                    >
                      <img src="/icon/checkIcon.svg" alt="check_icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full flex items-center justify-center">
                <Link href="/" className="w-fit">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", duration: 2 }}
                    viewport={{ once: true }}
                  >
                    <CustomizeButton
                      text="Read More"
                      className="bg-btnlinear border-none rounded !px-6 md:!px-14 py-3"
                      type="button"
                    />
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="w-full flex items-start justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/privacyImg.png"
              alt="sponsors"
              className="w-full tab:w-[485px]"
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-purple1 flex w-[100px] h-[100px] md:w-[200px] md:h-[200px] blur-[60px] md:blur-[120px] rounded-[50%] left-[0%] bottom-[50%] tab:bottom-[5%] absolute"
      ></motion.div>
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/graystar.png"
        alt="star"
        className="absolute flex right-[8%] bottom-[24%] tab:w-5 tab:h-5 w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/lightstarIcon.png"
        alt="star"
        className="absolute flex right-[38%] bottom-[28%] tab:w-5 tab:h-5 w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/purplestarIcon.png"
        alt="star"
        className="absolute flex right-[32%] bottom-[35%] w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/lightstarIcon.png"
        alt="star"
        className="absolute flex right-[15%] top-[23%] w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/purplestarIcon.png"
        alt="star"
        className="absolute flex right-[50%] top-[20%] tab:w-5 w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/graystar.png"
        alt="star"
        className="absolute flex left-[26%] top-[5%] tab:w-5 w-3"
      />
      <motion.img
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 2 }}
        viewport={{ once: true }}
        src="/icon/purplestarIcon.png"
        alt="star"
        className="absolute flex left-[2%] bottom-[33%] tab:w-5 w-3"
      />
    </section>
  );
};

export default Privacy;
