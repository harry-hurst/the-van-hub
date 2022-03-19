// NavBar ==============================================
export const navBar = {
  exit: {
    y: "-43px",
    opacity: 0,

    transition: {
      type: "tween",
    }
  },

  hidden: {
    transition: {
      duration: 0.4,
    },
  },

  visible: {
    transition: {
      duration: 0.4,
      delayChildren: 0.8,
      staggerChildren: 0.1,
    },
  },
};

export const navBarItem = {
  hidden: {
    x: "50vw",
    opacity: 0,

    transition: {
      duration: 0.2,
    },
  },

  visible: {
    x: 0,
    opacity: 1,

    transition: {
      duration: 0.2,
      type: "spring",
    },
  },
};
