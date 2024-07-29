export const animatedItem = ({
  x = 0,
  y = 0,
  blur = 0,
  scale = 1,
  duration = 0.3,
  type = "easeInOut",
  delay = 0,
}) => ({
  hidden: {
    opacity: 0,
    x: x,
    y: y,
    scale: scale,
    filter: `blur(${blur}px)`,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: delay,
      duration: duration,
      type: type,
    },
  },
});

export const animate = ({
  x = 0,
  y = 0,
  blur = 0,
  scale = 1,
  duration = 0.3,
  type = "easeInOut",
  delay = 0,
}) => ({
  hidden: {
      opacity: 0,
      x: x,
      y: y,
      scale: scale,
      filter: `blur(${blur}px)`,
  },
  visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
          delay: delay,
          duration: duration,
          type: type,
      },
  },
});

export const staggerItem = ({
  x = 0,
  y = 0,
  blur = 0,
  scale = 1,
  duration = 0.3,
  type = "tween",
  height = "auto",
  setHeight = "auto",
  width = "auto",
  setWidth = "auto",
}) => ({
  hidden: {
    opacity: 0,
    x: x,
    y: y,
    scale: scale,
    height: height,
    width: width,
    filter: `blur(${blur}px)`,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    height: setHeight,
    width: setWidth,
    transition: {
      duration: duration,
      type: type,
    },
  },
});

export const svgAnimation = ({ duration = 0.5, delay = 0 }) => ({
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: duration,
      delay: delay,
      ease: "easeInOut",
    },
  },
});

export const staggerList = ({ duration = 0.5, delay = 0.3 }) => ({
  hidden: {},
  visible: {
    transition: {
      delay: delay,
      staggerChildren: duration,
    },
  },
});
