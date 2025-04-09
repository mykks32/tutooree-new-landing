"use client";
import Tag from "@/components/tag";
import { useState } from "react";

const faqs = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without sacrificing power. Our intelligent interface adapts to your workflow, reducing clicks and keeping you in your creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers are productive within hours, not weeks. We also provide interactive tutorials and comprehensive documentation to help you get started.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Changes sync automatically when you're back online, so you can keep working anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for collaboration. You can invite team members to your projects, share feedback, and work together in real-time.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <Tag>FAQs</Tag>
        </div>
        <div className="text-6xl font-semibold mt-8 text-center">
          <span className="">Question? We&apos;ve got </span>
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
                  className="text-lime-400 font-black"
                  onClick={() => {
                    toggle(index);
                  }}
                >
                  &#10005;
                </button>
              </div>
              {openIndex === index && (
                <p className="text-neutral-400 mt-4">{faq.question}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
