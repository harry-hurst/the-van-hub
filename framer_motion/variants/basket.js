export const basketVariants = {
  hidden: {
    x: "100%",

    transition: {
      // when: "afterChildren",
      duration: 0.2,
      // staggerChildren: 0.1,
    },
  },

  visible: {
    x: 0,

    transition: {
      // delay: 0.4,
      duration: 0.4,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const basketItem = {

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


