import React from "react";
import styles from "../style";
import { discount, women } from "../assets";
import GetStarted from "./GetStarted";
import { motion } from "framer-motion";
import { leftVariants, rightVariants } from "../../variants";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={leftVariants}
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="font-poppins font-medium text-[18px] leading-[23px] text-white">
            <span className="text-white">37%</span> Discount For{" "}
            <span className="text-white">Explore the Fitness</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Effective <br />
            <span className="text-gradient">Yoga</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Shape your Body.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Engaging in yoga offers a holistic approach to wellness, encompassing
          both physical and mental benefits. Through a series of poses,
          stretches, and muscle strength.
        </p>
      </motion.div>

      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={rightVariants}
        className={`flex-1 flex ${styles.flexCenter} ss:my-0 my-10 relative`}
      >
        <img src={women} alt="women" className="w-full h-full relative z-[5]" />
        <div className="absolute z-[3] w-[90%] h-[90%] rounded-full pink__gradient" />
        <div className="absolute z-[2] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 blue__gradient top-0" />
      </motion.div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;