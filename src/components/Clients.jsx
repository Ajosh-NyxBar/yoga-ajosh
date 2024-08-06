import React from "react";
import { clients } from "../constant";
import styles from "../style";
import { motion } from "framer-motion";
import { titleVariants } from "../../variants";
const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={titleVariants}
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
