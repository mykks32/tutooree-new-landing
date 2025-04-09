import FeatureCard from "@/components/feature-card";
import Tag from "@/components/tag";

const features = [
  "Find Tutors",
  "Schedule Google Meet",
  "Get Notified",
  "Easy Payment",
  "Browse Tutor Profiles",
  "Set Learning Goals",
  "View Reviews & Ratings",
  "Manage Your Schedule",
];

export default function Features({ id }: { id: string }) {
  return (
    <section id={id} className="py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="text-7xl font-medium text-center mt-6">
          Simple yet powerful{" "}
          <span className="text-lime-400 md:block">features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 w-full mt-8">
          <FeatureCard
            className="col-span-1 md:col-span-2 lg:col-span-1"
            name="Find Tutors"
            text="Easily search for the right tutor based on your needs."
          >
            <video
              src="/clip.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full"
            />
          </FeatureCard>
          <FeatureCard
            className="col-span-1 md:col-span-2 lg:col-span-1"
            name="Messaging"
            text="Communicate directly with tutors through messaging."
          >
            <video
              src="/clip.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full"
            />
          </FeatureCard>
          <FeatureCard
            className="col-span-1 md:col-start-2 md:col-span-2 lg:col-span-1"
            name="Schedule Classes"
            text="Easily schedule sessions with tutors that fit your availability."
          >
            <video
              src="/clip.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-lg w-full"
            />
          </FeatureCard>
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
