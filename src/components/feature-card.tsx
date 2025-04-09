import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function FeatureCard(
  props: { name: string; text: string } & HTMLAttributes<HTMLDivElement>
) {
  const { name, text, className, children, ...otherProps } = props;
  return (
    <div className={twMerge("border border-white/15 p-6 rounded-3xl bg-neutral-900", className)} {...otherProps}>
      <div className="aspect-video">{children}</div>
      <div className="font-medium text-4xl mt-6">{name}</div>
      <div className="font-semibold text-white/50 mt-2">{text}</div>
    </div>
  );
}
