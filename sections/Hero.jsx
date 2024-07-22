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
        <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        />

        <div
          className="absolute inset-0 flex justify-center items-center z-20"
          style={{ top: "-60px" }}
        >
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            MagiCloud
          </motion.h1>
        </div>

        <a href="#explore">
          <div
            className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-30"
            style={{ top: "-20px" }}
          >
            <img
              src="/logo.png"
              alt="logo"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </a>
      </div>
    </motion.div>
  </section>
);

export default Hero;
