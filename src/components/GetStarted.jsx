import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";
const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Schedule</span>
          </p>
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Time</span>
        </p>

        <img src={arrowUp} alt="arrow" className="w-[24px] h-[24px] object-contain mt-2" />
      </div>
    </div>
  );
};

export default GetStarted;
