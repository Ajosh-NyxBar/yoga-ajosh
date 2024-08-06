import React from "react";
import { quotes } from "../assets";
import { motion } from "framer-motion";
import { descriptionVariants, tagVariants } from "../../variants";

const FeedBackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <div>
        <motion.img
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          src={quotes}
          alt=""
          className="w-[42px] h-[27px] object-contain"
        />
      </div>
      <motion.p
        initial="offscreen"
        whileInView="onscreen"
        variants={descriptionVariants}
        className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10"
      >
        {content}
      </motion.p>
      <div className="flex flex-row">
        <motion.img
          initial="offscreen"
          whileInView="onscreen"
          variants={tagVariants}
          src={img}
          alt={name}
          className="w-[48px] h-[48px] rounded-full"
        />
        <div className="flex flex-col ml-4">
          <motion.h4
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionVariants}
            className="font-poppins font-semibold text-[20px] leading-[32px] text-white"
          >
            {name}
          </motion.h4>
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionVariants}
            className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite"
          >
            {title}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
