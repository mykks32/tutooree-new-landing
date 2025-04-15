"use client";

import { motion, useAnimate, AnimationPlaybackControls } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const animation = useRef<AnimationPlaybackControls | null>(null);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animation.current = animate(
      scope.current,
      {
        x: "-50%",
      },
      {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }
    );
  }, []);

  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);

  return (
    <section className="mt-32">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="flex flex-none gap-16 text-8xl"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <span className="text-lime-400">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
