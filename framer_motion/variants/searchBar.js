export const closeButton = {
  hidden: {
    opacity: 0,
    scale: 0.4,
  },

  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      type: "spring",
      stiffness: 200,
    },
  },
};

export const placeholder = {
  hidden: {
    opacity: 0,
    x: "-100%",

    transition: {
      duration: 0.5,
    },
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};
