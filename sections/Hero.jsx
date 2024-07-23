"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="relative w-full md:-mt-[20px] -mt-[12px]">
        <div
          className="absolute w-full h-[300px] rounded-tl-[140px] z-[0] -top-[30px]"
          style={{
            background: "linear-gradient(90deg, rgba(50,60,80,0.8673844537815126) 0%, rgba(51,109,132,1) 100%)"
          }}
        />

        <div
          className="w-full sm:h-[500px] h-[350px] rounded-tl-[140px] z-10 relative"
          style={{
            background: "rgb(19,29,41)",
            background: "linear-gradient(90deg, rgba(19,29,41,0.8673844537815126) 0%, rgba(21,79,102,1) 100%)"
          }}
        ></div>

        <div
          className="absolute inset-0 flex justify-center items-center z-20"
          style={{ top: "-30px" }}
        >
         <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
    MagiCloud
  </motion.h1>  
  </div>
{/* here*/}
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

<a >
  <div
    className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-30"
    style={{ top: "-20px" }}
  >
    <img
      src="/stamp.png"
      alt="stamp"
      className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
    />
  </div>
        </a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
