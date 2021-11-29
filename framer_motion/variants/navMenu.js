export const navMenu = {
  hidden: {
    y: "100%",

    transition: {
      // when: "afterChildren",
      duration: 0.2,
      // staggerChildren: 0.1,
    },
  },

  visible: {
    y: 0,

    transition: {
      // delay: 0.4,
      duration: 0.4,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const navMenuItem = {
  hidden: {
    opacity: 0,
    scale: 0.8,

    transition: {
      duration: 0.2,
    },
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.2,
    },
  },
};

export const hiddenContent = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,

    transition: {
      delay: 0.2,
      type: "tween",
    },
  },
};
