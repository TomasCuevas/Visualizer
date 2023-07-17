import { Variants } from "framer-motion";

export const imageVariants: Variants = {
  offscreen: { opacity: 0, scale: 0.3 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0, 0.71, 0.2, 1.01] },
  },
};
