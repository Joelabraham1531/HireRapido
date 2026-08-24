import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeIn({ children, delay = 0, direction = "up", className = "" }: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const directions = {
    up: { y: 44, x: 0 },
    down: { y: -44, x: 0 },
    left: { x: 52, y: 0 },
    right: { x: -52, y: 0 },
    none: { x: 0, y: 0 },
  };

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985, filter: "blur(8px)", ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -70px 0px" }}
      transition={{
        duration: 0.78,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
