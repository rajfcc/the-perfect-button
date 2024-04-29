import { motion } from "framer-motion";
import "../index.css"
// declare global {
//   interface CSSProperties {
//     '--x'?: string;
//   }
// }

// interface CustomAnimationProps {
//   "--x"?: string;
//   // Add other animation properties here if needed
// }

// const animationProps: CustomAnimationProps = {
//   "--x": "-100%",
// };

// const initialAnimationProps = {
//   "--x": "100%", // Custom CSS property
//   scale: 1, // Initial scale
// };
const PerfectButton=()=>{
type AnimationProperties = {
  [key: string]: string | number; // Allow any CSS properties as keys with string or number values
};

const initialAnimationProps: AnimationProperties = {
  "--x": "100%", // Custom CSS property for initial animation
  scale: 1, // Initial scale
};

const animationProps: AnimationProperties = {
  "--x": "-100%", // Custom CSS property for animation
};
  return (
    <motion.button
      // initial={{ "--x": "100%", scale: 1 }as CSSProperties}
    //animate={{ "--x": "-100%" }as CSSProperties}//
    // initial={initialAnimationProps as TargetAndTransition}
    // animate={animationProps as TargetAndTransition}
    initial={initialAnimationProps as AnimationProperties}
animate={animationProps as AnimationProperties}
    // initial={{x:"100%",scale:1}}
    //   animate={{ x: "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="px-6 py-2.5 rounded-md relative radial-gradient"
    >
      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
        The Perfect Button
      </span>
      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
    </motion.button>
  );
};

export default PerfectButton;
