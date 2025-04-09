import Tag from "@/components/tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
  return (
    <section className="py-50">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <Tag>Introductin Layers</Tag>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <span>Your creative process deserves better. </span>
          <span className="text-white/15">{text}</span>
          <span className="text-lime-400 block">
            That&apos;s why we built Layers
          </span>
        </div>
      </div>
    </section>
  );
}
