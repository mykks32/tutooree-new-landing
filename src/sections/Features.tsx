import FeatureCard from "@/components/feature-card";
import Tag from "@/components/tag";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="py-10">
      <div className="w-full mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-7xl font-medium text-center mt-6">
          Where power meets{" "}
          <span className="text-lime-400 md:block">simplicity</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 w-full mt-8">
          <FeatureCard
            className="col-span-1 md:col-span-2 lg:col-span-1"
            name="Real Time Collabration"
            text="Work together seamlessly with conflict-free team editing"
          ></FeatureCard>
          <FeatureCard
            className="col-span-1 md:col-span-2 lg:col-span-1"
            name="Real Time Collabration"
            text="Work together seamlessly with conflict-free team editing"
          ></FeatureCard>
          <FeatureCard
            className="col-span-1 md:col-start-2 md:col-span-2 lg:col-span-1"
            name="Real Time Collabration"
            text="Work together seamlessly with conflict-free team editing"
          ></FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-white/15 px-3 py-1.5 rounded-2xl bg-neutral-900 inline-flex items-center justify-center gap-3"
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex justify-center items-center text-xl">
                &#10038;
              </span>
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
