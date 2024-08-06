import React from "react";
import styles, { layout } from "../style";
import { feed } from "../constant";
import FeedBackCard from "./FeedBackCard";
import { motion } from "framer-motion";
import { leftVariants, rightVariants } from "../../variants";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full white__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          variants={rightVariants}
          className={`${styles.heading2} text-white`}
        >
          What people are <br className="sm:block hidden" />
          saying successful stories
        </motion.h2>
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={leftVariants}
          className={`${styles.paragraph} text-white text-left max-w-[460px]`}
        >
          Everything you need to accept classes and grow your health anywhere on the sessions.
        </motion.p>
      </div>

      <div className="flex flex-wrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
        {feed.map((card) => (
          <FeedBackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;