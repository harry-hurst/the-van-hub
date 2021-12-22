export const container = {
  initial: { y: "100%" },

  show: {
    y: 0,

    transition: {
      delay: 0.4,
      duration: 0.8,
      delayChildren: 0.8,
      type: "tween",
    },
  },

  hidden: (offset) => ({
    x: offset,

    transition: {
      duration: 0.4,
      type: "tween",
    },
  }),
};
