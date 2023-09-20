import { motion } from "framer-motion";
interface StarProps {
  className: string;
  src: string | any;
}

const Star = ({ className, src }: StarProps) => {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 2 }}
      viewport={{ once: true }}
      src={src}
      alt="star"
      className={`absolute tab:w-5 tab:h-5 w-3 animate-pulse duration-500 ${className}`}
    />
  );
};

export default Star;
