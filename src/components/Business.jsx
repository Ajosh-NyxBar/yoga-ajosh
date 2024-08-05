import React from "react";
import styles, { layout } from "../style";
import Button from "./Button";
import { features } from "../constant";
import { motion } from "framer-motion";
import { leftVariants, rightVariants } from "../../variants";

const Business = () => {
  const FeatureCard = ({ icon, title, content, index }) => (
    <motion.div
      initial="offscreen"
      whileInView={"onscreen"}
      variants={rightVariants}
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </motion.div>
  );
  return (
    <section id="features" className={`${layout.section}`}>
      <motion.div
        initial="offscreen"
        whileInView={"onscreen"}
        variants={leftVariants}
        className={`${layout.sectionInfo} flex-1`}
      >
        <h2 className={`${styles.heading2} text-white`}>
          Why you should <br className="sm:block hidden" /> go to Yoga
        </h2>
        <p className={`${styles.paragraph} max-w-[475px] mt-5`}>
          Yoga is a practice that combines physical, mental, and emotional
          well-being. It is a holistic approach to health and well-being. It is
          a practice that combines physical, mental, and emotional well-being.
          It is a holistic approach to health and well-being.
        </p>

        <Button styles={`mt-10`} />
      </motion.div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
