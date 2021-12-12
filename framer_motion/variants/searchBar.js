export const placeholder = {
  hidden: {
    x: "-50vw",
    transition: {
      duration: 0.5,
    },
  },

  visible: {
    x: 0,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

export const closeButton = {
  hidden: {
    opacity: 0,
    scale: 0.4,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      duration: 0.3,
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};
