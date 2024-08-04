export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        delay: delay,
        duration: 1.5,
        ease: [0.25, 0.6, 0.3, 0.8],
        type: "tween",
      },
    },
    show: {
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        delay: delay,
        duration: 1.5,
        ease: [0.25, 0.25, 0.25, 0.75],
        type: "tween",
      },
    },
  };
};

export const titleVariants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2.2,
    },
  },
};

export const descriptionVariants = {
  offscreen: {
    y: 20,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2.6,
      delay: 0.2,
    },
  },
};

export const tagVariants = {
  offscreen: {
    y: 10,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2.8,
      delay: 0.4,
    },
  },
};
export const leftVariants = {
  offscreen: {
    x: -30,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2.2,
    },
  },
};
export const rightVariants = {
  offscreen: {
    x: 30,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 2.2,
    },
  },
};