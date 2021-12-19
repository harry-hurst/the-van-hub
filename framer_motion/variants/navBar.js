// NavBar ==============================================
export const navBar = {
  hidden: {
    opacity: 0,

    transition: {
      duration: 0.4,
    },
  },

  visible: {
    opacity: 1,

    transition: {
      
      duration: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const navBarItem = {
  hidden: {
    x: "50vw",
    transition: {
      // takes 0.2 seconds to animate out:
      duration: 0.2,
    },
  },

  visible: {
    x: 0,

    transition: {
      duration: 0.2,
    },
  },
};
