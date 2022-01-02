// VAN BODY *****************************************
export const animateVan = {
  y: [-1, -0.6, 1.1, -1.5, 0.8, -1],
  rotate: [0, -0.15, 0.08, -0.22, 0.08, 0],
};

export const transitionVan = {
  times: [0, 0.2, 0.4, 0.6, 0.8, 1],
  damping: 1,
  duration: 3,
  // repeatDelay: 3,
  type: "spring",
  damping: 10,
  // mass: 0.75,
  stiffness: 100,
  repeat: Infinity,
  //   repeatType: "mirror",
};

// WHEELS *****************************************
export const animateWheelL = {
  y: [5, -1, 2, 5, -1, 5],
  rotate: 360,
};

export const animateWheelR = {
  y: [5, -1, 2, 5, -1, 5],
  rotate: 360,
};

export const transitionWheelL = {
  duration: 3,
  delay: 0.6,
  repeat: Infinity,
  times: [0, 0.2, 0.4, 0.6, 0.8, 1],

  // target only rotate:
  rotate: {
    
    duration: 2,
    ease: "linear",
    repeat: Infinity,
  },
};

export const transitionWheelR = {
  duration: 3,
  repeat: Infinity,
  times: [0, 0.2, 0.4, 0.6, 0.8, 1],

  // target only rotate:
  rotate: {
    duration: 2,
    ease: "linear",
    repeat: Infinity,
  },
};

// ITEMS *****************************************
export const animateItem = {
  // use keyframes:
  scale: [1, 1.4, 1],
};

export const transitionItem1 = {
  delay: 3,
  damping: 8,
  duration: 0.3,
  repeatDelay: 5,
  type: "spring",
  repeat: Infinity,
};

export const transitionItem2 = {
  delay: 3.5,
  damping: 8,
  duration: 0.3,
  repeatDelay: 5,
  type: "spring",
  repeat: Infinity,
};

export const transitionItem3 = {
  delay: 4,
  damping: 8,
  duration: 0.3,
  repeatDelay: 5,
  type: "spring",
  repeat: Infinity,
};

export const transitionItem4 = {
  delay: 4.5,
  damping: 8,
  duration: 0.3,
  repeatDelay: 5,
  type: "spring",
  repeat: Infinity,
};
