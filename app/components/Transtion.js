import { motion } from "framer-motion";

const varianten = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};
const Transtion = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#231649] z-30 "
        variants={varianten}
        initial={varianten.initial}
        animate={varianten.animate}
        exit={varianten.exit}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen bg-[#2e1b65] z-20 "
        variants={varianten}
        initial={varianten.initial}
        animate={varianten.animate}
        exit={varianten.exit}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full h-screen w-screen  bg-[#5C3BC4] z-10 "
        variants={varianten}
        initial={varianten.initial}
        animate={varianten.animate}
        exit={varianten.exit}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
      ></motion.div>
    </>
  );
};

export default Transtion;
