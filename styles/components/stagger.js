//MoveLeft animations

export const MoveLeft = () => {
  return {
    visible: { opacity: 1, x: 0 },
    hidden: {
      x: -200,
      opacity: 0,
    },
  };
};
//Fade animations
export const FadeUpContainer = (delay, stagger) => {
  return {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: stagger,
        delay: delay,
      },
    },
  };
};
export const FadeUpChildren = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.03,
    },
  },
};
export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
