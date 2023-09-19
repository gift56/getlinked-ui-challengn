import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <section id="overview" className="w-full py-10">
      <div className="container">
        <div className="w-full flex flex-col items-center justify-center gap-8 tab:flex-row tab:justify-between tab:items-start">
          <div className="w-full"></div>
          <div className="w-full">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              viewport={{ once: true }}
              src="/img/privacyImg.png"
              alt="sponsors"
              className="w-full tab:w-[559px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
