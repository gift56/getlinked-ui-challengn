import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <section className="w-full py-10 border-b border-borderColor">
      <div className="container">
        <div className="flex items-center justify-center tab:justify-between w-full gap-6 flex-col tab:flex-row">
          <div className="w-full tab:flex-1">
            <img src="/img/ideaImg.png" alt="ideaImg" className="tab:w-[490px] w-[264px]" />
          </div>
          <div className="w-full tab:flex-1 flex flex-col gap-1">
            <h2 className="text-xl font-bold md:text-2xl text-center tab:text-start tab:text-3xl font-clash">
              Introduction to getlinked{" "}
              <span className="font-clash text-primary block">
                tech Hackathon 1.0
              </span>
            </h2>
            <p className="text-center text-sm  font-normal tab:text-start">
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
