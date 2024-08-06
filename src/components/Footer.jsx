import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constant";
import styles from "../style";
import { motion } from "framer-motion";
import { descriptionVariants, tagVariants } from "../../variants";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          variants={descriptionVariants}
          className="flex-1 flex flex-col justify-start mr-10"
        >
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <motion.p
            initial="offscreen"
            whileInView="onscreen"
            variants={descriptionVariants}
            className="font-poppins font-normal text-dimWhite text-[18px] leading-[27px] mt-4 max-w-[310px]"
          >
            A new way to manage your appointments.
          </motion.p>
        </motion.div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              variants={descriptionVariants}
              key={link.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul className="list-none mt-4">
                {link.links.map((item, index) => (
                  <li
                    key={item.name}
                    className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] hover:text-secondary cursor-pointer ${
                      index !== link.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          variants={descriptionVariants}
          className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white"
        >
          Copyright ⓒ 2024 HooBank. All Rights Reserved.
        </motion.p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <motion.img
              initial="offscreen"
              whileInView="onscreen"
              variants={tagVariants}
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
