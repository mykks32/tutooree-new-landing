import Button from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container mx-auto relative px-2 md:px-4 lg:px-16">
        <div className="absolute -left-56 top-16 hidden lg:block">
          <Image src={designExample1Image} alt="design example 1" />
        </div>
        <div className="absolute -top-16 -right-84 hidden lg:block">
          <Image src={designExample2Image} alt="design example 2" />
        </div>
        <div className="absolute top-96 left-54 hidden lg:block">
          <Pointer name="Shree" />
        </div>
        <div className="absolute right-54 hidden lg:block">
          <Pointer name="Yadav" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium mt-6 text-center">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 md:max-w-2xl mx-auto">
          Design tools shouldn&apos;t slow you down. Layers combines powerful
          features with an intuitive interface that keeps you in your creative
          flow
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
