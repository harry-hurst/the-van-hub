export const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const item = {
  hidden: {
    x: "-100%",

    transition: {
      duration: 0.4,
      type: "tween",
    },
  },
  show: {
    x: 0,

    transition: {
      duration: 0.4,
      type: "tween",
    },
  },
};
