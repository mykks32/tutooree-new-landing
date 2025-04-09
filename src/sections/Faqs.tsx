"use client";
import Tag from "@/components/tag";
import { useState } from "react";

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

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-24">
      <div className="container max-w-5xl mx-auto px-4 md:px-8 lg:px-16">
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
              <div className="flex justify-between">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <button
                  className="text-lime-400 font-medium text-4xl"
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  {openIndex === index ? "x" : "+"}
                </button>
              </div>
              {openIndex === index && (
                <p className="text-neutral-400 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
