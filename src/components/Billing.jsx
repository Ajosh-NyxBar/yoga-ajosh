import React, { useRef } from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { motion, useScroll, useTransform } from "framer-motion";
import { descriptionVariants, leftVariants, rightVariants, tagVariants, titleVariants } from "../../variants";

const Billing = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <motion.div
        style={{ scale }}
        ref={ref}
        className={`${layout.sectionImgReverse}`}
      >
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* Gradient start */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        {/* Gradient end */}
      </motion.div>

      <div className={`${layout.sectionInfo}`}>
        <motion.h2
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          className={`${styles.heading2} text-white`}
        >
          How Yoga can <br className="sm:block hidden" /> Change Your Life
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView={"onscreen"}
          variants={descriptionVariants}
          className={`${styles.paragraph} max-w-[475px] mt-5`}
        >
          Yoga is a practice that combines physical, mental, and emotional
          well-being. It is a holistic approach to health and well-being.
        </motion.p>

        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={tagVariants}
          className="flex flex-row flex-wrap sm:mt-10 mt-6"
        >
          <img
            src={apple}
            alt="apple"
            className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google"
            className="w-[144.66px] h-[43.08px] object-contain mr-5 cursor-pointer"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Billing;
