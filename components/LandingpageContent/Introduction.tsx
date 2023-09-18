import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="w-full py-16">
      <div className="container">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col tab:flex-row">
          <div className="w-full tab:flex-1"></div>
          <div className="w-full tab:flex-1 flex flex-col gap-1">
            <h2 className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash">
              Introduction to getlinked{" "}
              <span className="font-clash text-primary tab:block">
                tech Hackathon 1.0
              </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
