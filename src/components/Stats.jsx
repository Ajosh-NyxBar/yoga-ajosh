import React from "react";
import styles from "../style";
import { stats } from "../constant";
import { motion } from "framer-motion";
import { titleVariants } from "../../variants";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}> 
      {stats.map((stat) => (
        <motion.div
          initial="offscreen"
          whileInView={"onscreen"}
          variants={titleVariants}
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.89px] leading-[43.89px] text-white">
            {stat.title}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.value}
          </p>
        </motion.div>
      ))}
    </section>
  );
};

export default Stats;
