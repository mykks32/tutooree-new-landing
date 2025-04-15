"use client";
import Tag from "@/components/tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "motion/react";

const faqs = [
  {
    question: "How can I find a tutor?",
    answer:
      "Simply use our search tool to filter tutors by subject, experience, and location. You can view their profiles and select the best fit for your learning needs.",
  },
  {
    question: "Can I schedule a lesson with a tutor?",
    answer:
      "Yes! Once you find a tutor, you can schedule a Google Meet session directly through the platform. Select a time that works for you, and you're ready to start learning.",
  },
  {
    question: "How do I make payments for lessons?",
    answer:
      "We offer secure and easy payment options through the platform. You can pay for individual sessions or packages depending on what suits you best.",
  },
  {
    question: "Do I receive reminders for my classes?",
    answer:
      "Yes, you’ll receive notifications and reminders about your scheduled lessons so you never miss a session.",
  },
  {
    question: "Can I review my tutor after a lesson?",
    answer:
      "Yes! After each lesson, you’ll be able to leave feedback and rate your tutor, helping future learners choose the right tutor for their needs.",
  },
  {
    question: "How can I contact my tutor?",
    answer:
      "You can message your tutor directly via the platform to discuss lesson details or share any specific requirements before your scheduled session.",
  },
  {
    question: "Is there a trial lesson available?",
    answer:
      "Some tutors may offer trial lessons at a discounted rate, so you can experience their teaching style before committing to a full session.",
  },
  {
    question: "Can I reschedule a class?",
    answer:
      "Yes, if you need to reschedule, you can easily manage your appointments through your dashboard, subject to tutor availability.",
  },
];

export default function Faqs({ id }: { id: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="pt-32">
      <div className="max-w-full md:max-w-9/12 lg:max-w-9/12 mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <Tag>FAQs</Tag>
        </div>
        <div className="text-6xl font-semibold mt-8 text-center">
          <span className="">Have questions? We&apos;ve got </span>
          <span className="text-lime-400">answers</span>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/15 rounded-2xl px-6 py-4 bg-neutral-900"
            >
              <div className="flex justify-between transition duration-500">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-lime-400 font-medium text-4xl transition duration-500",
                    openIndex === index && "rotate-45"
                  )}
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                {/* <button
                  className="text-lime-400 font-medium text-4xl"
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  {openIndex === index ? "x" : "+"}
                </button> */}
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className={twMerge("mt-6 overflow-hidden")}
                  >
                    <p className="text-neutral-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
