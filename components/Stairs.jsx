import { animate, motion } from "framer-motion";

//variants
const stairsAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100% ", "0%"],
  },
};

//calculate the reversed index for staggered delay
const reverseIndex = (index) => {
  const totalsteps = 6;

  return totalsteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs each representing a step of the stair
    each div will have the same animation defined by the stairsAnimation object
    The delay for each div is calculated dynamically using the reversed index creating  an effect with decreasing delay for each subsequent step
     */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairsAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
