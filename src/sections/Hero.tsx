"use client";

import Button from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
import { motion, useAnimate } from "motion/react";
import { useEffect } from "react";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { x: 0, y: [0, 64, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 300 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { x: 0, y: [0, 64, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container mx-auto relative px-4 md:px-8 lg:px-16">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          drag
          className="absolute -left-64 top-16 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            draggable="false"
            alt="design example 1"
          />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 200, x: 100 }}
          drag
          className="absolute -top-16 -right-96 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            draggable="false"
            alt="design example 2"
          />
        </motion.div>

        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute top-96 left-32 hidden lg:block"
        >
          <Pointer name="Shree" />
        </motion.div>

        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, y: 200, x: 400 }}
          className="absolute right-54 hidden lg:block"
        >
          <Pointer name="Yadav" color="red" />
        </motion.div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-lime-400 to-green-400 rounded-full text-neutral-950 font-semibold">
            🚀 Connecting with top tutors!
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mt-6 text-center">
          Find the perfect tutor, effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 md:max-w-2xl mx-auto">
          Tutooree connects you with expert tutors who are ready to help you
          excel. Whether you&apos;re looking for academic support or specialized
          coaching, we make it simple to find the right match for your needs.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg justify-center mx-auto focus-within:ring-1">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent outline-none px-4 flex-1"
          />
          <Button variant="primary" type="submit" className="whitespace-nowrap">
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
