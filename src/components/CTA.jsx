import React from "react";
import Button from "./Button";
import styles from "../style";
import { motion } from "framer-motion";
import { descriptionVariants } from "../../variants";
const CTA = () => {
  return (
    <motion.section
      initial="offscreen"
      whileInView="onscreen"
      variants={descriptionVariants}
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} text-white`}>
          Prepare your classes and grow your health
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept classes and grow your health anywhere on
          the sessions.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </motion.section>
  );
};

export default CTA;
