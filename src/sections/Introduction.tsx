import Tag from "@/components/tag";

const text = `You're looking for the best tutors, but traditional platforms make it hard to find the right fit and often overwhelm you with unnecessary steps.`;

export default function Introduction() {
  return (
    <section className="py-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <Tag>Introduction to Tutooree</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <span>Your learning journey deserves better. </span>
          <span className="text-white/15">{text}</span>
          <span className="text-lime-400 block">
            That&apos;s why we built Tutooree
          </span>
        </div>
      </div>
    </section>
  );
}
