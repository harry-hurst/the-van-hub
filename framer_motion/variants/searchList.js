export const searchList = {
  hidden: (offset) => ({
    x: offset,

    transition: {
      duration: 0.4,
    },
  }),

  visible: {
    x: 0,

    transition: {
      duration: 0.4,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

export const searchListItem = {
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
