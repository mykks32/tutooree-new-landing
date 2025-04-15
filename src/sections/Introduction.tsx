"use client";

import Tag from "@/components/tag";
import { useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're looking for the best tutors, but traditional platforms make it hard to find the right fit and often overwhelm you with unnecessary steps.`;
const words = text.split('')

export default function Introduction() {
  const scrollTarget = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ['start end', 'end end']
  });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest)
  // })
  const [currentWord, setCurrentWord] = useState(0)
  const wordIndex = useTransform(scrollYProgress, [0,1], [0, words.length ])

  useEffect(()=>{
    wordIndex.on('change', (latest) => {
      setCurrentWord(latest);
    })
  }, [wordIndex])

  return (
    <section className="py-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="sticky top-20 md:top-30 lg:top-40">
          <div className="flex justify-center">
            <Tag>Introduction to Tutooree</Tag>
          </div>
          <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
            <span>Your learning journey deserves better. </span>
            <span className="">{
              words.map((word, wordIndex)=> (
                <span key={wordIndex} className={twMerge('transition duration-500 text-white/15',wordIndex<currentWord && 'text-white')}>{word}</span>
              ))
            }</span>
            <span className="text-lime-400 block">
              That&apos;s why we built Tutooree
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
}
