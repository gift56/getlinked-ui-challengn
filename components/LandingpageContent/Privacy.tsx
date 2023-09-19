import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <section id="overview" className="w-full py-14">
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
              className="text-center tab:text-start text-sm font-normal mt-5"
            >
              {`Below are our privacy & policy, which outline a lot of goodies.
                it’s our aim to always take of our participant`}
            </motion.p>
            <div className="w-full border border-primary bg-[#d9d9d908] rounded-[5px] flex items-center justify-center gap-6 tab:items-start tab:justify-start p-4 tab:p-12">dhhdb</div>
          </div>
          <div className="w-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/privacyImg.png"
              alt="sponsors"
              className="w-full tab:w-[549px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
