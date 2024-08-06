import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { card } from "../assets";
import { motion } from "framer-motion";
import {
  descriptionVariants,
  rightVariants,
  tagVariants,
  titleVariants,
} from "../../variants";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className={`${styles.heading2} text-white`}
        >
          Find a better card <br /> deal in few easy steps.
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={descriptionVariants}
          className={`${styles.paragraph} max-w-[475px] mt-5`}
        >
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="flex flex-row flex-wrap sm:mt-10 mt-6"
        >
          <Button styles={`mt-10`} />
        </motion.div>
      </div>

      {/* Gradient */}
      <div className="absolute z-[0] w-[50%] h-[50%] top-0 pink__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] bottom-0 orange__gradient" />
      <div className={`${layout.sectionImg}`}>
        <motion.img
          initial="offscreen"
          whileInView={"onscreen"}
          variants={rightVariants}
          src={card}
          alt="card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default CardDeal;