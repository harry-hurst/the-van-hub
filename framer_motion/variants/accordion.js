export const hiddenContent = {
  hidden: {
    scale: 0.8,
    opacity: 0,

    transition: {
      duration: 0.2,
    },
  },

  visible: {
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.2,
      delay: 0.2,
      type: "tween",
    },
  },
};
