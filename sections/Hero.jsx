"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";



const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 flex justify-center items-center z-20"
        style={{ top: "-30px" }}
      >
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          MagiCloud
        </motion.h1>
      </div>

      <div
        className="absolute inset-0 flex justify-center items-center z-20"
        style={{ top: "-30px" }}
      >
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute left-0"
          style={{ bottom: "70px" }}
          onAnimationComplete={(definition) => {
            if (definition.x === 0) {
              document.querySelector(".cloud-left").classList.add("shaking");
            }
          }}
        >
          <img
            src="/cloud-left.png"
            alt="cloud-left"
            className="w-[500px] h-[300px] object-contain cloud-left"
            style={{ opacity: 0.8 }}
          />
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute right-0"
          style={{ top: "30px" }}
          onAnimationComplete={(definition) => {
            if (definition.x === 0) {
              document.querySelector(".cloud-right").classList.add("shaking");
            }
          }}
        >
          <img
            src="/cloud-right.png"
            alt="cloud-right"
            className="w-[500px] h-[300px] object-contain cloud-right"
            style={{ opacity: 0.8 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;